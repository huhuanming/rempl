'use strict';

const event = require('../../transport/event.cjs');
const index = require('../../utils/index.cjs');
const sandboxInit = require('./sandbox-init.cjs');
const global = require('../../utils/global.cjs');

const initEnvSubscriberMessage = new WeakMap();

// TODO: make tree-shaking friendly
if (global.parent !== global.globalThis) {
    addEventListener(
        'message',
        function (event) {
            const data = event.data || {};

            if (event.source && data.to === 'rempl-env-publisher:connect') {
                initEnvSubscriberMessage.set(event.source, data);
            }
        },
        true
    );
}

function createSandbox(settings, callback) {
    function initSandbox(sandboxWindow) {
        if (settings.type === 'script') {
            sandboxWindow.postMessage(
                {
                    action: 'rempl-sandbox-init-scripts',
                    scripts: settings.content,
                },
                '*'
            );
        }

        if (global.parent !== global.globalThis && sandboxWindow !== global.globalThis) {
            let toSandbox = NaN;
            let toEnv = NaN;

            if (onEnvMessage) {
                removeEventListener('message', onEnvMessage, true);
                onEnvMessage = null;
            }

            addEventListener(
                'message',
                (onEnvMessage = function (event) {
                    const data = event.data || {};

                    switch (data.to) {
                        case 'rempl-env-subscriber:connect':
                        case toSandbox:
                            toEnv = data.from;
                            sandboxWindow.postMessage(data, '*');
                            break;

                        case 'rempl-env-publisher:connect':
                        case toEnv:
                            toSandbox = data.from;
                            global.parent.postMessage(data);
                            break;
                    }
                }),
                true
            );

            if (settings.type !== 'script') {
                const initMessage = initEnvSubscriberMessage.get(sandboxWindow);

                if (initMessage) {
                    toSandbox = initMessage.from;
                    global.parent.postMessage(initMessage);
                }
            }
        }

        // sandbox <-> subscriber transport
        // TODO: teardown transport
        transport = event.EventTransport.get('rempl-sandbox', 'rempl-subscriber', sandboxWindow).onInit(
            {},
            (api) => callback(api)
        );

        if (connected) {
            transport.ownEndpoints.set(['*']);
        }
    }

    let iframe = null;
    let onEnvMessage = null;
    let transport = null;
    let connected = false;

    settings = settings || {};

    if (settings.window) {
        initSandbox(settings.window);
    } else {
        iframe = document.createElement('iframe');
        iframe.name = index.genUID(); // to avoid cache
        iframe.onload = () => iframe?.contentWindow && initSandbox(iframe.contentWindow);
        iframe.setAttribute('sandbox', 'allow-scripts allow-forms allow-popups allow-modals');

        if (settings.type === 'url') {
            iframe.src = settings.content;
        } else if (settings.sandboxSrc) {
            iframe.src = settings.sandboxSrc;
        } else {
            iframe.srcdoc = '<!doctype html><script>(' + String(sandboxInit.initSandboxScript) + ')()</script>';
            // iframe.src = URL.createObjectURL(
            //     new Blob(
            //         ['<!doctype html><script>(' + String(initSandboxScript) + ')()</script>'],
            //         { type: 'text/html' }
            //     )
            // );
        }

        (settings.container || document.documentElement).appendChild(iframe);
    }

    const sandbox = {
        setConnected(state) {
            connected = state;

            if (transport) {
                transport.ownEndpoints.set(connected ? ['*'] : []);
            }
        },
        destroy() {
            if (onEnvMessage) {
                removeEventListener('message', onEnvMessage, true);
                onEnvMessage = null;
            }

            if (transport) {
                transport.ownEndpoints.set([]);
            }

            if (iframe !== null) {
                iframe.remove();
                iframe.setAttribute('srcdoc', index.trustedEmptyHTML);
                iframe.setAttribute('src', index.trustedEmptyHTML);
                iframe = null;
            }
        },
    };

    return sandbox;
}

exports.createSandbox = createSandbox;
