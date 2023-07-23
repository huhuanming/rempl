'use strict';

const ReactiveValue = require('../classes/ReactiveValue.js');
const EndpointList = require('../classes/EndpointList.js');
const index = require('../utils/index.js');

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// @ts-ignore




const endpoints = Object.create(null);
const INFO_UPDATE_TIME = 100;














function valuesChanged(a, b) {
    for (const key of Object.keys(a)) {
        const value1 = a[key];
        const value2 = b[key];

        if (Array.isArray(value1)) {
            if (valuesChanged(value1, value2)) {
                return true;
            }
        } else {
            if (String(value1) !== String(value2)) {
                return true;
            }
        }
    }

    return false;
}

function normalizeUri(uri) {
    uri = String(uri);

    if (/^\d+$/.test(uri)) {
        return 'ws://localhost:' + uri;
    }

    return uri
        .replace(/^http:\/\//i, 'ws://')
        .replace(/^https:\/\//i, 'wss://')
        .replace(/^([a-z]+:\/\/)|^/i, function (m, protocol) {
            protocol = protocol ? protocol.toLowerCase() : '';
            return protocol === 'ws://' || protocol === 'wss://' ? protocol : 'ws://';
        });
}

function subscribe( endpoint, fn) {
    return index.subscribe(this.dataCallbacks, {
        endpoint,
        fn,
    });
}

function send( endpoint, callback) {
    this.send('rempl:from publisher', endpoint, callback);
}

function onConnect() {
    clearInterval(this.sendInfoTimer );

    this.connected.set(true);
    this.info = this.getInfo();

    this.send('rempl:endpoint connect', this.info, (data) => {
        if ('id' in data) {
            this.setClientId(data.id);
        }

        this.sendInfoTimer = setInterval(this.sendInfo.bind(this), INFO_UPDATE_TIME);
    });
}

function onGetUI(
    
    id,
    settings,
    callback




) {
    const publisherMeta = this.publishersMap.get(id );

    if (!publisherMeta) {

        callback('Publisher `' + id + "` isn't registered");
        return;
    }

    return publisherMeta
        .getRemoteUI(settings || {})
        .catch((error) => ({ error: String(_optionalChain([error, 'optionalAccess', _ => _.message])) }))
        .then((res) => {
            if ('error' in res) {
                callback(res.error);
            } else {
                callback(null, res.type, res.value);
            }
        });
}

function onData( id, ...args) {
    if (!this.publishersMap.has(id )) {

        return;
    }

    this.dataCallbacks.forEach(function (callback) {
        if (callback.endpoint === id) {
            callback.fn.apply(null, args);
        }
    });
}

function onDisconnect() {

    clearInterval(this.sendInfoTimer );
    this.connected.set(false);
}

class WsTransport {
    static get(endpoint, socketIO) {
        if (endpoint in endpoints) {
            return endpoints[endpoint];
        }

        return (endpoints[endpoint] = new this(endpoint, socketIO));
    }

    __init() {this.publishers = [];}
    __init2() {this.publishersMap = new Map();}
    __init3() {this.dataCallbacks = [];}

    __init4() {this.connected = new ReactiveValue.ReactiveValue(false);}
    __init5() {this.ownEndpoints = new EndpointList.EndpointList();}
    __init6() {this.remoteEndpoints = new EndpointList.EndpointList();}

    

    __init7() {this.sessionId = index.genUID();}
    __init8() {this.id = null;}
    __init9() {this.sendInfoTimer = null;}
    __init10() {this.info = this.getInfo();}

    constructor(uri, socketIO) {WsTransport.prototype.__init.call(this);WsTransport.prototype.__init2.call(this);WsTransport.prototype.__init3.call(this);WsTransport.prototype.__init4.call(this);WsTransport.prototype.__init5.call(this);WsTransport.prototype.__init6.call(this);WsTransport.prototype.__init7.call(this);WsTransport.prototype.__init8.call(this);WsTransport.prototype.__init9.call(this);WsTransport.prototype.__init10.call(this);

        this.socket = socketIO
            .connect(normalizeUri(uri), { transports: ['websocket'] })
            .on('connect', onConnect.bind(this))
            .on('disconnect', onDisconnect.bind(this))
            .on('rempl:get ui', onGetUI.bind(this))
            .on('rempl:to publisher', onData.bind(this));
    }

    get type() {
        return 'unknown';
    }

    setClientId(id) {
        this.id = id;
    }

    /**
     * Send data through WS
     */
    send(name, arg, callback) {
        this.socket.emit(name, arg, callback);
    }

    /**
     * Get self info
     */
    getInfo() {
        return {
            id: this.id,
            sessionId: this.sessionId,
            type: this.type,
            publishers: [...this.publishers],
        };
    }

    /**
     * Send self info to server
     */
    sendInfo() {
        const newInfo = this.getInfo();

        if (valuesChanged(this.info, newInfo)) {
            this.info = newInfo;
            this.send('rempl:endpoint info', this.info);
        }
    }

    createApi(publisher) {
        if (this.publishersMap.has(publisher.id )) {

            return;
        }

        if (publisher.id) {
            this.publishers.push(publisher.id);
            // todo точно всегда есть getRemoteUI
            this.publishersMap.set(publisher.id, {
                getRemoteUI: publisher.getRemoteUI,
            });
        }

        this.sendInfo();

        return {
            connected: this.connected,
            send: send.bind(this, publisher.id),
            subscribe: subscribe.bind(this, publisher.id),
        };
    }

    sync(publisher) {
        const api = this.createApi(publisher);

        if (api) {
            api.subscribe(publisher.processInput.bind(publisher));
            api.connected.link((connected) => {
                publisher.setupChannel('ws', api.send, this.remoteEndpoints, connected);
            });
        }
    }
}

exports.WsTransport = WsTransport;
