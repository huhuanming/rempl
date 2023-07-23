'use strict';

const Namespace = require('./Namespace.js');
const ReactiveValue = require('./ReactiveValue.js');
const EndpointListSet = require('./EndpointListSet.js');

class Endpoint {
    
    


    get namespaceClass() {
        return Namespace.Namespace;
    }
    __init() {this.type = 'Endpoint';}
    __init2() {this.channels = [];}
    __init3() {this.connected = new ReactiveValue.ReactiveValue(false);}
    __init4() {this.remoteEndpoints = new EndpointListSet.EndpointListSet();}

    

    constructor(id) {Endpoint.prototype.__init.call(this);Endpoint.prototype.__init2.call(this);Endpoint.prototype.__init3.call(this);Endpoint.prototype.__init4.call(this);
        this.id = id || null;
        this.namespaces = Object.create(null);

        this.remoteEndpoints.on((endpoints) => {
            // Star is used as a hack for subscriber<->sandbox communication
            // TODO: find a better solution
            this.connected.set(endpoints.includes(this.id || '*'));
        }, this);

        // TODO: rework
        // const defaultNS = this.ns('*');
        // const methodNames: (keyof TNamespace)[] = [];

        // for (
        //     let cursor = defaultNS;
        //     cursor && cursor != Object.prototype;
        //     cursor = Object.getPrototypeOf(cursor)
        // ) {
        //     methodNames.push(...(Object.getOwnPropertyNames(cursor) as (keyof TNamespace)[]));
        // }

        // for (const method of methodNames) {
        //     // todo rework in the next version
        //     if (typeof defaultNS[method] === 'function') {
        //         // @ts-ignore
        //         this[method] = defaultNS[method].bind(defaultNS);
        //     }
        // }
    }

    getName() {
        return this.type + (this.id ? '#' + this.id : '');
    }

    ns(name) {
        let namespace = this.namespaces[name];

        if (!namespace) {
            namespace = Object.assign(new this.namespaceClass(name, this) );
            this.namespaces[name] = namespace;
        }

        return namespace;
    }

    send(packet, callback = null) {
        for (const { send } of this.channels) {
            send(packet, callback);
        }
    }

    requestRemoteApi() {
        this.send({ type: 'getProvidedMethods' } , (methods) => {
            this.setRemoteApi(methods );
        });
    }

    setRemoteApi(api) {
        const changed = [];

        if (!api) {
            api = {};
        }

        for (const name in api) {
            if (Array.isArray(api[name])) {
                const ns = this.ns(name);
                const methods = api[name].slice().sort();
                const different =
                    ns.remoteMethods.length !== methods.length ||
                    ns.remoteMethods.some(function (value, idx) {
                        return value !== methods[idx];
                    });

                if (different) {
                    ns.remoteMethods = methods;
                    changed.push(ns);
                }
            }
        }

        for (const name in this.namespaces) {
            if (Array.isArray(api[name]) === false) {
                const ns = this.namespaces[name];

                ns.remoteMethods = [];
                changed.push(ns);
            }
        }

        changed.forEach((ns) => Namespace.Namespace.notifyRemoteMethodsChanged(ns));
    }

    getProvidedApi() {
        const api = Object.create(null);

        for (const name in this.namespaces) {
            api[name] = Object.keys(this.namespaces[name].methods).sort();
        }

        return api;
    }

    scheduleProvidedMethodsUpdate() {
        if (!this.providedMethodsUpdateTimer) {
            this.providedMethodsUpdateTimer = setTimeout(() => {
                this.providedMethodsUpdateTimer = null;
                this.send({
                    type: 'remoteMethods',
                    methods: this.getProvidedApi(),
                });
            }, 0);
        }
    }

    processInput(packet, callback) {
        switch (packet.type) {
            case 'call': {
                const thePacket = packet;
                const ns = this.ns(thePacket.ns || '*');

                if (!ns.isMethodProvided(thePacket.method)) {
                    return console.warn(
                        `[rempl][sync] ${this.getName()} (namespace: ${
                            thePacket.ns || 'default'
                        }) has no remote method:`,
                        thePacket.method
                    );
                }

                Namespace.Namespace.invoke(ns, thePacket.method, thePacket.args, callback);
                break;
            }

            case 'remoteMethods': {
                const thePacket = packet;
                this.setRemoteApi(thePacket.methods);
                break;
            }

            case 'getProvidedMethods':
                callback(this.getProvidedApi());
                break;

            default:
                console.warn(
                    '[rempl][sync] ' + this.getName() + 'Unknown packet type:',
                    // @ts-ignore
                    packet.type
                );
        }
    }

    setupChannel(type, send, remoteEndpoints, available) {
        if (available) {
            this.channels.push({
                type,
                send,
            });
            // Note that endpoints should be changed after channels is changed,
            // since it may change this.connected that can send something to remote side
            // when connection is established
            this.remoteEndpoints.add(remoteEndpoints);
        } else {
            for (let i = 0; i < this.channels.length; i++) {
                if (this.channels[i].type === type && this.channels[i].send === send) {
                    this.remoteEndpoints.remove(remoteEndpoints);
                    this.channels.splice(i, 1);
                    break;
                }
            }
        }
    }
}

exports.Endpoint = Endpoint;
