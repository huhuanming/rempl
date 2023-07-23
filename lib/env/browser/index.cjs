'use strict';

const global = require('../../utils/global.cjs');
const event = require('../../transport/event.cjs');
const Publisher = require('../../classes/Publisher.cjs');
const Subscriber = require('../../classes/Subscriber.cjs');

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
        event.EventTransport.get('rempl-env-subscriber', 'rempl-env-publisher', global.parent).sync(subscriber);
    }

    return subscriber;
}

function createEnv(id) {
    return new EnvPublisher(id);
}

exports.createEnv = createEnv;
exports.getEnv = getEnv;
