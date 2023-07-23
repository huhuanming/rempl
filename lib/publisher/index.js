import { connect, getPublisher } from './factory.js';
import { fetchWsSettings, createNodeWsTransport } from './transport-ws.js';

function createPublisher(
    id,
    getRemoteUI,
    options
) {
    connect(true, createNodeWsTransport, fetchWsSettings);

    const publisher = getPublisher(id, getRemoteUI, options);

    return Object.assign(publisher.ns('*'), {
        ns: publisher.ns.bind(publisher),
    });
}

function connectPublisherWs(uri) {
    connect(false, createNodeWsTransport, fetchWsSettings, uri);
}

export { connectPublisherWs, createPublisher };
//# sourceMappingURL=index.js.map
