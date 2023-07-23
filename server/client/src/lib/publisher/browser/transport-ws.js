'use strict';

const socketIO = require('socket.io-client/dist/socket.io.slim.js');
const ws = require('../../transport/ws.js');
const index = require('./identify/index.js');
require('../../utils/index.js');
const fakeGlobal = require('../../utils/fakeGlobal.js');

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }/* eslint-env browser */

const STORAGE_KEY = 'rempl:id';


function fetchWsSettings() {
    function fetchEnvVariable() {
        if (typeof REMPL_SERVER !== 'undefined' && REMPL_SERVER !== fakeGlobal.globalThis.REMPL_SERVER) {
            return REMPL_SERVER;
        }
    }

    function fetchMeta() {
        const meta =
            typeof document !== 'undefined'
                ? document.querySelector('meta[name="rempl:server"]')
                : undefined;

        return (meta && meta.getAttribute('content')) || undefined;
    }

    const implicitUri = location.protocol + '//' + (location.hostname || 'localhost') + ':8177';
    let explicitUri = undefined;
    let setup = fetchEnvVariable();

    if (setup === undefined) {
        setup = fetchMeta();
    }

    switch (setup) {
        case 'none':
        case undefined:
        case false:
            // no explicit setting
            break;

        case 'implicit':
        case 'auto':
        case true:
            explicitUri = implicitUri;
            break;

        default:
            if (typeof setup === 'string') {
                explicitUri = setup;
            }
    }

    return {
        explicit: explicitUri,
        implicit: implicitUri,
    };
}

class BrowserWsTransport extends ws.WsTransport {
    constructor(uri) {
        super(uri, socketIO);

        const self = this;

        try {
            this.id = sessionStorage[STORAGE_KEY];
        } catch (e) {}

        this.socket
            .on(
                'rempl:identify',
                function (num, callback) {
                    index.startIdentify((this ).io.uri, num, callback);

                    for (const publisherId of self.publishers) {
                        index.postIdentifyMessage({
                            op: 'add-publisher',
                            id: publisherId,
                            name: publisherId,
                        });
                    }
                }
            )
            .on('rempl:stop identify', index.stopIdentify)
            .on('disconnect', index.stopIdentify);
    }

    get type() {
        return 'browser';
    }

    setClientId(id) {
        super.setClientId(id);
        try {
            sessionStorage[STORAGE_KEY] = this.id;
        } catch (e) {}
    }

    getInfo() {
        return {
            ...super.getInfo(),
            location: String(location),
            title: _optionalChain([fakeGlobal.top, 'optionalAccess', _ => _.document, 'optionalAccess', _2 => _2.title]) || _optionalChain([fakeGlobal.top, 'optionalAccess', _3 => _3.location, 'optionalAccess', _4 => _4.href]) || 'Unknown',
        };
    }
}

function createBrowserWsTransport(uri) {
    return new BrowserWsTransport(uri);
}

exports.BrowserWsTransport = BrowserWsTransport;
exports.createBrowserWsTransport = createBrowserWsTransport;
exports.fetchWsSettings = fetchWsSettings;
