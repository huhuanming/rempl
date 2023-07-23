'use strict';

const event = require('../../transport/event.js');
const factory = require('../factory.js');
const transportWs = require('./transport-ws.js');

function createPublisher(
    id,
    getRemoteUI,
    options
) {
    factory.connect(true, transportWs.createBrowserWsTransport, transportWs.fetchWsSettings);

    const publisher = factory.getPublisher(id, getRemoteUI, options);

    // browser extension
    event.EventTransport.get('rempl-browser-extension-publisher', 'rempl-browser-extension-host').sync(
        publisher
    );

    // in page
    event.EventTransport.get('rempl-inpage-publisher', 'rempl-inpage-host').sync(publisher);

    // self subscriber
    event.EventTransport.get('rempl-self-publisher', 'rempl-self-subscriber').sync(publisher);

    return Object.assign(publisher.ns('*'), {
        ns: publisher.ns.bind(publisher),
    });
}

function connectPublisherWs(uri) {
    factory.connect(false, transportWs.createBrowserWsTransport, transportWs.fetchWsSettings, uri);
}

exports.connectPublisherWs = connectPublisherWs;
exports.createPublisher = createPublisher;
