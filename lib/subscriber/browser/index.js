import { opener as resolvedOpener, parent as resolvedParent } from '../../utils/global.js';
import { Subscriber } from '../../classes/Subscriber.js';
import { EventTransport } from '../../transport/event.js';
import { setOverlayVisible } from './disconnected-overlay/index.js';

/* eslint-env browser */

let subscriber = null;

function createSubscriber() {
    subscriber = new Subscriber();

    // default overlay
    const connectedObservable = Object.assign(subscriber.connected, { defaultOverlay: true });
    connectedObservable.link((connected) => {
        if (connected) {
            setOverlayVisible(false);
        } else if (connectedObservable.defaultOverlay) {
            setOverlayVisible(true);
        }
    });

    // link to transport
    EventTransport.get('rempl-subscriber', 'rempl-sandbox', resolvedOpener || resolvedParent).sync(subscriber);

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
    const subscriber = new Subscriber(id);

    EventTransport.get('rempl-self-subscriber', 'rempl-self-publisher').sync(subscriber);

    return Object.assign(subscriber.ns('*'), {
        connected: subscriber.connected,
        ns: subscriber.ns.bind(subscriber),
    });
}

export { getSelfSubscriber, getSubscriber };
//# sourceMappingURL=index.js.map
