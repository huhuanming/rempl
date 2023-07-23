'use strict';

const factory = require('./factory.cjs');
const transportWs = require('./transport-ws.cjs');

function createPublisher(
    id,
    getRemoteUI,
    options
) {
    factory.connect(true, transportWs.createNodeWsTransport, transportWs.fetchWsSettings);

    const publisher = factory.getPublisher(id, getRemoteUI, options);

    return Object.assign(publisher.ns('*'), {
        ns: publisher.ns.bind(publisher),
    });
}

function connectPublisherWs(uri) {
    factory.connect(false, transportWs.createNodeWsTransport, transportWs.fetchWsSettings, uri);
}

exports.connectPublisherWs = connectPublisherWs;
exports.createPublisher = createPublisher;
