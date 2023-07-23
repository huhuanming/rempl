'use strict';

const Namespace = require('./Namespace.cjs');
const Endpoint = require('./Endpoint.cjs');

class PublisherNamespace extends Namespace.Namespace {
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

class Publisher extends Endpoint.Endpoint {
    type = 'Publisher';
    get namespaceClass() {
        return PublisherNamespace;
    }
}

exports.Publisher = Publisher;
exports.PublisherNamespace = PublisherNamespace;
