import { EventTransport } from '../../transport/event.js';
import { connect, getPublisher } from '../factory.js';
import { fetchWsSettings, createBrowserWsTransport } from './transport-ws.js';

function createPublisher(
    id,
    getRemoteUI,
    options
) {
    connect(true, createBrowserWsTransport, fetchWsSettings);

    const publisher = getPublisher(id, getRemoteUI, options);

    // browser extension
    // EventTransport.get('rempl-browser-extension-publisher', 'rempl-browser-extension-host').sync(
    //     publisher
    // );

    // in page
    // EventTransport.get('rempl-inpage-publisher', 'rempl-inpage-host').sync(publisher);

    // self subscriber
    EventTransport.get('rempl-self-publisher', 'rempl-self-subscriber').sync(publisher);

    return Object.assign(publisher.ns('*'), {
        ns: publisher.ns.bind(publisher),
    });
}

function connectPublisherWs(uri) {
    connect(false, createBrowserWsTransport, fetchWsSettings, uri);
}

export { connectPublisherWs, createPublisher };
//# sourceMappingURL=index.js.map
