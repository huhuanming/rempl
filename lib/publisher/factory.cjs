'use strict';

const TransportPublisher = require('./TransportPublisher.cjs');

const publishers = new Map();
let ws = null;

function getPublisher(
    id,
    getRemoteUI,
    options
) {
    let publisher = publishers.get(id);

    if (publisher) {
        console.warn(`[rempl] Publisher with ID "${id}" has been already created`);
        return publisher;
    }

    publisher = new TransportPublisher.TransportPublisher(id, getRemoteUI, options);
    publishers.set(id, publisher);

    if (ws) {
        ws.sync(publisher);
    }

    return publisher;
}

function resolveWsUri(
    settings,
    uri
) {
    switch (uri) {
        case 'implicit':
        case undefined:
            return settings.explicit || settings.implicit;

        case 'explicit':
            return settings.explicit;
    }

    return uri;
}

function connect(
    auto,
    createWsTransport,
    fetchWsSettings,
    uri
) {
    if (ws === null) {
        uri = auto ? fetchWsSettings().explicit : resolveWsUri(fetchWsSettings(), uri);

        if (typeof uri === 'string') {
            ws = createWsTransport(uri);

            for (const publisher of publishers.values()) {
                ws.sync(publisher);
            }
        } else if (!auto) {
            console.warn(
                "[rempl] Connection to WS server doesn't established since bad value for URI",
                uri
            );
        }
    } else {
        console.warn('[rempl] Connection to WS server already set');
    }
}

exports.connect = connect;
exports.getPublisher = getPublisher;
exports.resolveWsUri = resolveWsUri;
