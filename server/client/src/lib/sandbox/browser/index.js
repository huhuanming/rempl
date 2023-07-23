'use strict';

const event = require('../../transport/event.js');
const index = require('../../utils/index.js');
const sandboxInit = require('./sandbox-init.js');
const fakeGlobal = require('../../utils/fakeGlobal.js');

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }


















const initEnvSubscriberMessage = new WeakMap();

// TODO: make tree-shaking friendly
if (fakeGlobal.parent !== fakeGlobal.globalThis) {
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

        if (fakeGlobal.parent !== fakeGlobal.globalThis && sandboxWindow !== fakeGlobal.globalThis) {
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
                            fakeGlobal.parent.postMessage(data);
                            break;
                    }
                }),
                true
            );

            if (settings.type !== 'script') {
                const initMessage = initEnvSubscriberMessage.get(sandboxWindow);

                if (initMessage) {
                    toSandbox = initMessage.from;
                    fakeGlobal.parent.postMessage(initMessage);
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
        iframe.onload = () => _optionalChain([iframe, 'optionalAccess', _ => _.contentWindow]) && initSandbox(iframe.contentWindow);
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
