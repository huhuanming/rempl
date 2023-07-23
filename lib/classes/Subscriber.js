import { subscribe } from '../utils/index.js';
import { Namespace } from './Namespace.js';
import { Endpoint } from './Endpoint.js';

const subscribers = new Map();

class SubscriberNamespace extends Namespace {
    constructor(name, endpoint) {
        super(name, endpoint);
        subscribers.set(this, []);
    }

    subscribe(fn) {
        this.callRemote('init').then(fn);

        return subscribe(subscribers.get(this) || [], fn);
    }
}

class Subscriber extends Endpoint {
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

export { Subscriber, SubscriberNamespace };
//# sourceMappingURL=Subscriber.js.map
