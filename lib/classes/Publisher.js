import { Namespace } from './Namespace.js';
import { Endpoint } from './Endpoint.js';

class PublisherNamespace extends Namespace {
    _lastData = null;
    publish;

    constructor(name, owner) {
        super(name, owner);

        this.provide('init', () => this._lastData);
        this.publish = (payload) => {
            this._lastData = payload;
            owner.send({
                type: 'data',
                ns: this.name,
                payload,
            });
        };
    }
}

class Publisher extends Endpoint {
    type = 'Publisher';
    get namespaceClass() {
        return PublisherNamespace;
    }
}

export { Publisher, PublisherNamespace };
//# sourceMappingURL=Publisher.js.map
