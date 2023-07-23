'use strict';

const index = require('../utils/index.cjs');
const Namespace = require('./Namespace.cjs');
const Endpoint = require('./Endpoint.cjs');

const subscribers = new Map();

class SubscriberNamespace extends Namespace.Namespace {
    constructor(name, endpoint) {
        super(name, endpoint);
        subscribers.set(this, []);
    }

    subscribe(fn) {
        this.callRemote('init').then(fn);

        return index.subscribe(subscribers.get(this) || [], fn);
    }
}

class Subscriber extends Endpoint.Endpoint {
    type = 'Subscriber';
    get namespaceClass() {
        return SubscriberNamespace;
    }

    constructor(id) {
        super(id);

        this.connected.on((connected) => {
            if (connected) {
                this.requestRemoteApi();

                for (const name in this.namespaces) {
                    const ns = this.namespaces[name];
                    const nsSubscribers = subscribers.get(ns) || [];

                    if (nsSubscribers.length) {
                        ns.callRemote('init').then((data) => {
                            for (const callback of nsSubscribers) {
                                callback(data);
                            }
                        });
                    }
                }
            } else {
                this.setRemoteApi();
            }
        });
    }

    processInput(packet, callback) {
        switch (packet.type) {
            case 'data': {
                const { ns, payload } = packet;
                const nsSubscribers = subscribers.get(this.ns(ns || '*'));

                if (nsSubscribers) {
                    nsSubscribers.slice().forEach((callback) => callback(payload));
                }
                break;
            }

            default:
                super.processInput(packet , callback); // FIXME!!!
        }
    }
}

exports.Subscriber = Subscriber;
exports.SubscriberNamespace = SubscriberNamespace;
