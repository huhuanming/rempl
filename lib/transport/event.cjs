'use strict';

const ReactiveValue = require('../classes/ReactiveValue.cjs');
const EndpointList = require('../classes/EndpointList.cjs');
const EndpointListSet = require('../classes/EndpointListSet.cjs');
const index = require('../utils/index.cjs');
const global = require('../utils/global.cjs');

/* eslint-env browser */
const DEBUG_PREFIX = '[rempl][event-transport] ';


























const allTransports = [];

class EventTransport {
    static get(
        name,
        connectTo,
        win
    ) {
        if (!win) {
            win = global.globalThis;
        }

        const transport = allTransports.find(
            (transport) =>
                transport.name === name &&
                transport.connectTo === connectTo &&
                transport.realm === win
        );

        return transport || new EventTransport(name, connectTo, win);
    }

    name;
    connectTo;
    realm;
    inputChannelId;
    connections = new Map();
    connected = new ReactiveValue.ReactiveValue(false);
    endpointGetUI = new Map();
    ownEndpoints = new EndpointList.EndpointList();
    remoteEndpoints = new EndpointListSet.EndpointListSet();

    initCallbacks = [];
    dataCallbacks = [];
    sendCallbacks = new Map();
    inited = false;

    constructor(
        name,
        connectTo,
        win
    ) {
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
        this.realm = win || global.globalThis;

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
        if (event.source !== this.realm || event.target !== global.globalThis) {
            return;
        }

        const data = event.data || {};
        const connectTo = `${this.name}:connect`;

        switch (data.to) {
            case connectTo:
                if (data.payload?.initiator === this.connectTo) {
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
                this.connections.get(from)?.endpoints.set(payload.endpoints);
                this.connected.set(true);
                this.initCallbacks.splice(0).forEach((args) => this.onInit(...args));
                break;
            }

            case 'endpoints': {
                this.connections.get(from)?.endpoints.set(payload.data[0]);
                break;
            }

            case 'disconnect': {
                this.connections.get(from)?.endpoints.set([]);
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
                            .catch((error) => ({ error: String(error?.message) }))
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
