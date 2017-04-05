var Namespace = require('../classes/Namespace.js');
var Endpoint = require('../classes/Endpoint.js');
var Token = require('../classes/Token.js');
var utils = require('../utils/index.js');

var SubscriberNamespace = function(name, owner) {
    Namespace.call(this, name, owner);

    this.subscribers = [];
};

SubscriberNamespace.prototype = Object.create(Namespace.prototype);
SubscriberNamespace.prototype._lastData = null;
SubscriberNamespace.prototype.subscribe = function(fn) {
    this.callRemote('init', fn);
    return utils.subscribe(this.subscribers, fn);
};

var Subscriber = function(id) {
    Endpoint.call(this, id);

    this.connected = new Token(false);

    this.envSubscribers = [];
    this.env = {
        subscribe: function(fn) {
            return utils.subscribe(this.envSubscribers, fn);
        }.bind(this),
        send: function(payload, callback) {
            Namespace.send(this, [{
                type: 'to-env',
                payload: payload
            }, callback]);
        }.bind(this)
    };
};

Subscriber.prototype = Object.create(Endpoint.prototype);
Subscriber.prototype.namespaceClass = SubscriberNamespace;
Subscriber.prototype.getName = function() {
    return 'Subscriber';
};
Subscriber.prototype.processInput = function(packet, callback) {
    switch (packet.type) {
        case 'publisher:connect':
            this.connected.set(true);
            this.requestRemoteApi();
            for (var name in this.namespaces) {
                var ns = this.namespaces[name];
                if (ns.subscribers.length) {
                    ns.callRemote('init', function(data) {
                        this.subscribers.forEach(function(callback) {
                            callback(data);
                        });
                    }.bind(ns));
                }
            }
            break;

        case 'publisher:disconnect':
            this.setRemoteApi();
            this.connected.set(false);
            break;

        case 'env:data':
            this.envSubscribers.slice().forEach(function(callback) {
                callback(packet.payload);
            });
            break;

        case 'data':
            this.ns(packet.ns || '*').subscribers.slice().forEach(function(callback) {
                callback(packet.payload);
            });
            break;

        default:
            Endpoint.prototype.processInput.call(this, packet, callback);
    }
};

Subscriber.factory = function createSubscriberFactory(Subscriber) {
    return function createSubscriber(id) {
        return new Subscriber(id);
    };
};

module.exports = Subscriber;
