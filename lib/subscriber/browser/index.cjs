'use strict';

const global = require('../../utils/global.cjs');
const Subscriber = require('../../classes/Subscriber.cjs');
const event = require('../../transport/event.cjs');
const index = require('./disconnected-overlay/index.cjs');

/* eslint-env browser */

let subscriber = null;

function createSubscriber() {
    subscriber = new Subscriber.Subscriber();

    // default overlay
    const connectedObservable = Object.assign(subscriber.connected, { defaultOverlay: true });
    connectedObservable.link((connected) => {
        if (connected) {
            index.setOverlayVisible(false);
        } else if (connectedObservable.defaultOverlay) {
            index.setOverlayVisible(true);
        }
    });

    // link to transport
    event.EventTransport.get('rempl-subscriber', 'rempl-sandbox', global.opener || global.parent).sync(subscriber);

    return subscriber;
}

function getSubscriber() {
    if (subscriber === null) {
        subscriber = createSubscriber();
    }

    return Object.assign(subscriber.ns('*'), {
        connected: subscriber.connected,
        ns: subscriber.ns.bind(subscriber),
    });
}

function getSelfSubscriber(id) {
    const subscriber = new Subscriber.Subscriber(id);

    event.EventTransport.get('rempl-self-subscriber', 'rempl-self-publisher').sync(subscriber);

    return Object.assign(subscriber.ns('*'), {
        connected: subscriber.connected,
        ns: subscriber.ns.bind(subscriber),
    });
}

exports.getSelfSubscriber = getSelfSubscriber;
exports.getSubscriber = getSubscriber;
