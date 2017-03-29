/* eslint-env browser */
/* global asset */
var EventTransport = require('../../transport/event.js');
var createSandbox = require('../../sandbox/index.js');
var createElement = require('./createElement.js');
var uid = require('../../utils/index.js').genUID();
var publishers = [];
var selectedPublisher = null;
var transport = null;
// var externalWindow = null;
var sandbox = null;
var view = null;
var host = null;

function updateTabSelectedState(tab) {
    tab.classList.toggle(
        isolateName('tab_selected'),
        tab.getAttribute('publisher') === selectedPublisher
    );
}

function updatePublisherList() {
    var list = getView().tabs;
    list.innerHTML = '';
    publishers.forEach(function(publisher) {
        var tab = createElement({
            publisher: publisher,
            class: isolateName('tab'),
            children: [publisher],
            events: {
                click: function() {
                    selectPublisher(publisher);
                }
            }
        }).element;
        updateTabSelectedState(tab);
        list.appendChild(tab);
    });
}

function createLayoutButton(side, onclick, children) {
    return {
        side: side,
        class: isolateName('layout-button'),
        children: children ? children : [{
            class: isolateName('layout-button-part')
        }],
        events: {
            click: typeof onclick === 'function' ? onclick : function() {
                view.element.setAttribute('side', side);
            }
        }
    };
}

function isolateName(name) {
    return uid + '-' + name;
}

function preprocessCSS(css) {
    return css.replace(/\.([a-z])/gi, '.' + isolateName('') + '$1');
}

function getView() {
    if (view === null) {
        view = createElement({
            class: isolateName('host'),
            side: 'bottom',
            children: [
                {
                    tagName: 'style',
                    children: [
                        preprocessCSS(typeof asset === 'function'
                            ? asset('./style.css', true)
                            : require('fs').readFileSync(__dirname + '/style.js', 'utf8'))
                    ]
                },
                {
                    class: isolateName('toolbar'),
                    children: [
                        {
                            ref: 'tabs',
                            style: {
                                display: 'flex',
                                flex: 1
                            }
                        },
                        {
                            ref: 'buttons',
                            class: isolateName('layout-buttons'),
                            children: [].concat(
                                createLayoutButton('external', function() {
                                    // if (externalWindow === null || externalWindow.closed) {
                                    //     externalWindow = window.open('about:blank', 'rempl');
                                    //     _publisher.getRemoteUI({}, function(error, type, content) {
                                    //         cleanupSandbox();
                                    //         sandbox = createSandbox({
                                    //             container: view.sandbox,
                                    //             type: type,
                                    //             content: content,
                                    //             window: externalWindow
                                    //         }, function(api) {
                                    //             _callback(api);
                                    //             api.send({
                                    //                 type: 'publisher:connect'
                                    //             });
                                    //         });
                                    //     });
                                    // } else {
                                    //     externalWindow.focus();
                                    // }
                                }, [{
                                    class: isolateName('layout-button-part-wrapper'),
                                    children: [{
                                        class: isolateName('layout-button-part')
                                    }, {
                                        class: isolateName('layout-button-part')
                                    }]
                                }]),
                                ['left', 'top', 'bottom', 'right', 'full'].map(function(side) {
                                    return createLayoutButton(side);
                                }),
                                {
                                    class: isolateName('close-button'),
                                    events: {
                                        click: function() {
                                            selectPublisher();
                                        }
                                    }
                                }
                            )
                        }
                    ]
                },
                {
                    ref: 'sandbox',
                    class: isolateName('sandbox')
                }
            ]
        });

        updatePublisherList();
    }

    return view;
}

function injectElement(container, element) {
    if (!container) {
        container = document.documentElement;
    }

    return container.appendChild(element);
}

function showView() {
    injectElement(document.body, getView().element);
}

function hideView() {
    getView().element.remove();
}

function cleanupSandbox() {
    if (sandbox !== null) {
        sandbox.destroy();
        sandbox = null;
    }
}

function selectPublisher(publisher) {
    if (publisher !== selectedPublisher) {
        selectedPublisher = publisher;
        Array.prototype.forEach.call(getView().tabs.children, updateTabSelectedState);

        if (selectedPublisher) {
            showView();
            transport.onInit({ id: selectedPublisher }, function(papi) {
                papi.getRemoteUI(function(error, type, content) {
                    cleanupSandbox();
                    sandbox = createSandbox({
                        container: view.sandbox,
                        type: type,
                        content: content
                    }, function(api) {
                        papi.subscribe(api.send);
                        api.subscribe(papi.send);
                        api.send({
                            type: 'publisher:connect'
                        });
                    });
                });
            });
        } else {
            hideView();
            cleanupSandbox();
        }
    }
}

module.exports = function getHost() {
    // supported only in browser env
    if (typeof document === 'undefined') {
        return;
    }

    if (host !== null) {
        return host;
    }

    transport = new EventTransport('rempl-inpage-host', 'rempl-inpage-publisher')
        .onPublishersChanged(function(endpointPublishers) {
            publishers = endpointPublishers;
            updatePublisherList();
        });

    return host = {
        activate: function(publisherId) {
            selectPublisher(publisherId);
        },
        deactivate: function() {
            selectPublisher();
        }
    };
};