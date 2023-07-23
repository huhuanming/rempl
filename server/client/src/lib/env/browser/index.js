'use strict';

const fakeGlobal = require('../../utils/fakeGlobal.js');
const event = require('../../transport/event.js');
const Publisher = require('../../classes/Publisher.js');
const Subscriber = require('../../classes/Subscriber.js');

/* eslint-env browser */

const subscribers = new Map();

class EnvPublisher extends Publisher.Publisher {
    linkWindow(target) {
        event.EventTransport.get('rempl-env-publisher', 'rempl-env-subscriber', target).sync(this);
    }
}

function getEnv(id) {
    let subscriber = subscribers.get(id);

    if (!subscriber) {
        subscribers.set(id, (subscriber = new Subscriber.Subscriber(id)));
        event.EventTransport.get('rempl-env-subscriber', 'rempl-env-publisher', fakeGlobal.parent).sync(subscriber);
    }

    return subscriber;
}

function createEnv(id) {
    return new EnvPublisher(id);
}

exports.createEnv = createEnv;
exports.getEnv = getEnv;
