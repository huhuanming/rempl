'use strict';

const ReactiveValue = require('../classes/ReactiveValue.js');
const EndpointList = require('../classes/EndpointList.js');
const EndpointListSet = require('../classes/EndpointListSet.js');
const index = require('../utils/index.js');
const fakeGlobal = require('../utils/fakeGlobal.js');

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }/* eslint-env browser */
const DEBUG_PREFIX = '[rempl][event-transport] ';


























const allTransports = [];

class EventTransport {
    static get(
        name,
        connectTo,
        win
    ) {
        if (!win) {
            win = fakeGlobal.globalThis;
        }

        const transport = allTransports.find(
            (transport) =>
                transport.name === name &&
                transport.connectTo === connectTo &&
                transport.realm === win
        );

        return transport || new EventTransport(name, connectTo, win);
    }





    __init() {this.connections = new Map();}
    __init2() {this.connected = new ReactiveValue.ReactiveValue(false);}
    __init3() {this.endpointGetUI = new Map();}
    __init4() {this.ownEndpoints = new EndpointList.EndpointList();}
    __init5() {this.remoteEndpoints = new EndpointListSet.EndpointListSet();}

    __init6() {this.initCallbacks = [];}
    __init7() {this.dataCallbacks = [];}
    __init8() {this.sendCallbacks = new Map();}
    __init9() {this.inited = false;}

    constructor(
        name,
        connectTo,
        win
    ) {EventTransport.prototype.__init.call(this);EventTransport.prototype.__init2.call(this);EventTransport.prototype.__init3.call(this);EventTransport.prototype.__init4.call(this);EventTransport.prototype.__init5.call(this);EventTransport.prototype.__init6.call(this);EventTransport.prototype.__init7.call(this);EventTransport.prototype.__init8.call(this);EventTransport.prototype.__init9.call(this);
        if (allTransports.length === 0 && typeof addEventListener === 'function') {
            addEventListener(
                'message',
                (e) => {
                    for (const transport of allTransports) {
                        transport._onMessage(e);
                    }
                },
                false
            );
        }

        allTransports.push(this);

        this.name = name;
        this.connectTo = connectTo;
        this.inputChannelId = `${name}/${index.genUID()}`;
        this.realm = win || fakeGlobal.globalThis;

        this.ownEndpoints.on((endpoints) => {
            if (this.connected.value) {
                this.send({
                    type: 'endpoints',
                    data: [endpoints],
                });
            }
        });

        if (
            typeof this.realm.postMessage !== 'function' ||
            typeof addEventListener !== 'function'
        ) {
            console.warn(DEBUG_PREFIX + "Event (postMessage) transport isn't supported");
            return;
        }

        this._handshake(false);
    }

    _handshake(inited) {
        this._send(`${this.connectTo}:connect`, {
            type: 'handshake',
            initiator: this.name,
            inited,
            endpoints: this.ownEndpoints.value,
        });
    }

    _onMessage(event) {
        if (event.source !== this.realm || event.target !== fakeGlobal.globalThis) {
            return;
        }

        const data = event.data || {};
        const connectTo = `${this.name}:connect`;

        switch (data.to) {
            case connectTo:
                if (_optionalChain([data, 'access', _ => _.payload, 'optionalAccess', _2 => _2.initiator]) === this.connectTo) {
                    this._onConnect(data.from, data.payload);
                }
                break;

            case this.inputChannelId:
                if (this.connections.has(data.from)) {
                    this._onData(data.from, data.payload);
                } else {
                    console.warn(DEBUG_PREFIX + 'unknown incoming connection', data.from);
                }
                break;
        }
    }

    _onConnect(from, payload) {
        if (!payload.inited) {
            this._handshake(true);
        }

        if (!this.connections.has(from)) {
            const endpoints = new EndpointList.EndpointList(payload.endpoints);

            this.remoteEndpoints.add(endpoints);
            this.connections.set(from, {
                ttl: Date.now(),
                endpoints,
            });
            this._send(from, {
                type: 'connect',
                endpoints: this.ownEndpoints.value,
            });
        }

        this.inited = true;
    }

    _onData(from, payload) {

        switch (payload.type) {
            case 'connect': {
                _optionalChain([this, 'access', _3 => _3.connections, 'access', _4 => _4.get, 'call', _5 => _5(from), 'optionalAccess', _6 => _6.endpoints, 'access', _7 => _7.set, 'call', _8 => _8(payload.endpoints)]);
                this.connected.set(true);
                this.initCallbacks.splice(0).forEach((args) => this.onInit(...args));
                break;
            }

            case 'endpoints': {
                _optionalChain([this, 'access', _9 => _9.connections, 'access', _10 => _10.get, 'call', _11 => _11(from), 'optionalAccess', _12 => _12.endpoints, 'access', _13 => _13.set, 'call', _14 => _14(payload.data[0])]);
                break;
            }

            case 'disconnect': {
                _optionalChain([this, 'access', _15 => _15.connections, 'access', _16 => _16.get, 'call', _17 => _17(from), 'optionalAccess', _18 => _18.endpoints, 'access', _19 => _19.set, 'call', _20 => _20([])]);
                this.connected.set(false);
                break;
            }

            case 'callback': {
                if (payload.callback) {
                    const callback = this.sendCallbacks.get(payload.callback);

                    if (typeof callback === 'function') {
                        callback(...payload.data);
                        this.sendCallbacks.delete(payload.callback);
                    }
                }
                break;
            }

            case 'data': {
                let args = payload.data;
                const callback = payload.callback;

                if (callback) {
                    args = args.concat(this._wrapCallback(from, callback));
                }

                for (const { endpoint, fn } of this.dataCallbacks) {
                    if (endpoint === payload.endpoint) {
                        fn(...args);
                    }
                }
                break;
            }
            case 'getRemoteUI': {
                if (!payload.endpoint) {
                    return;
                }

                const getUI = this.endpointGetUI.get(payload.endpoint);

                if (typeof getUI !== 'function') {
                    console.warn(
                        DEBUG_PREFIX +
                            'receive unknown endpoint for getRemoteUI(): ' +
                            payload.endpoint
                    );

                    if (payload.callback) {
                        this._wrapCallback(
                            from,
                            payload.callback
                        )('Wrong endpoint – ' + payload.endpoint);
                    }
                } else {
                    if (payload.callback) {
                        const callback = this._wrapCallback(from, payload.callback);

                        getUI(payload.data[0] || {})
                            .catch((error) => ({ error: String(_optionalChain([error, 'optionalAccess', _21 => _21.message])) }))
                            .then((res) => {
                                if ('error' in res) {
                                    callback(res.error);
                                } else {
                                    callback(null, res.type, res.value);
                                }
                            });
                    }
                }
                break;
            }

            default:
                console.warn(
                    DEBUG_PREFIX +
                        'Unknown message type `' +
                        // @ts-ignore
                        payload.type +
                        '` for `' +
                        this.name +
                        '`',
                    payload
                );
        }
    }

    _wrapCallback(to, callback) {
        return (...args) =>
            this._send(to, {
                type: 'callback',
                callback,
                data: args,
            });
    }



    _send(to, payload) {

        if (typeof this.realm.postMessage === 'function') {
            const message = {
                from: this.inputChannelId,
                to,
                payload,
            };

            this.realm.postMessage(message, '*');
        }
    }

    subscribeToEndpoint(endpoint, fn) {
        return index.subscribe(this.dataCallbacks, {
            endpoint,
            fn,
        });
    }

    sendToEndpoint


(endpoint, type, ...args) {
        let callback = null;

        if (args.length && typeof args[args.length - 1] === 'function') {
            callback = index.genUID();
            this.sendCallbacks.set(callback, args.pop() );
        }

        this.send({
            type,
            endpoint,
            data: args,
            callback,
        });
    }

    send(payload) {
        for (const channelId of this.connections.keys()) {
            this._send(channelId, payload);
        }
    }

    onInit(endpoint, callback) {
        const id = endpoint.id || null;

        if (id) {
            this.ownEndpoints.set(this.ownEndpoints.value.concat(id));

            if (typeof endpoint.getRemoteUI === 'function') {
                this.endpointGetUI.set(id, endpoint.getRemoteUI);
            }
        }

        if (this.inited) {
            callback({
                connected: this.connected,
                subscribe: this.subscribeToEndpoint.bind(this, id),
                getRemoteUI: this.sendToEndpoint.bind(this, id, 'getRemoteUI'),
                send: this.sendToEndpoint.bind(this, id, 'data'),
            });
        } else {
            this.initCallbacks.push([endpoint, callback]);
        }

        return this;
    }

    sync(endpoint) {
        const channel = index.genUID(8) + ':' + this.connectTo;

        this.onInit(endpoint, (api) => {
            api.subscribe(endpoint.processInput.bind(endpoint));
            api.connected.link((connected) => {
                endpoint.setupChannel(channel, api.send, this.remoteEndpoints, connected);
            });
        });

        return this;
    }
}

exports.EventTransport = EventTransport;
