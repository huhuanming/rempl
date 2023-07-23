'use strict';

const Namespace = require('./Namespace.js');
const Endpoint = require('./Endpoint.js');

class PublisherNamespace extends Namespace.Namespace {
    __init() {this._lastData = null;}
    

    constructor(name, owner) {
        super(name, owner);PublisherNamespace.prototype.__init.call(this);
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

class Publisher extends Endpoint.Endpoint {constructor(...args2) { super(...args2); Publisher.prototype.__init2.call(this); }
    __init2() {this.type = 'Publisher';}
    get namespaceClass() {
        return PublisherNamespace;
    }
}

exports.Publisher = Publisher;
exports.PublisherNamespace = PublisherNamespace;
