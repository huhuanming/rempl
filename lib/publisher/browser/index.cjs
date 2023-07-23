'use strict';

const event = require('../../transport/event.cjs');
const factory = require('../factory.cjs');
const transportWs = require('./transport-ws.cjs');

function createPublisher(
    id,
    getRemoteUI,
    options
) {
    factory.connect(true, transportWs.createBrowserWsTransport, transportWs.fetchWsSettings);

    const publisher = factory.getPublisher(id, getRemoteUI, options);

    // browser extension
    // EventTransport.get('rempl-browser-extension-publisher', 'rempl-browser-extension-host').sync(
    //     publisher
    // );

    // in page
    // EventTransport.get('rempl-inpage-publisher', 'rempl-inpage-host').sync(publisher);

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
