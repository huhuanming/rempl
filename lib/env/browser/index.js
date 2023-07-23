import { parent as resolvedParent } from '../../utils/global.js';
import { EventTransport } from '../../transport/event.js';
import { Publisher } from '../../classes/Publisher.js';
import { Subscriber } from '../../classes/Subscriber.js';

/* eslint-env browser */

const subscribers = new Map();

class EnvPublisher extends Publisher {
    linkWindow(target) {
        EventTransport.get('rempl-env-publisher', 'rempl-env-subscriber', target).sync(this);
    }
}

function getEnv(id) {
    let subscriber = subscribers.get(id);

    if (!subscriber) {
        subscribers.set(id, (subscriber = new Subscriber(id)));
        EventTransport.get('rempl-env-subscriber', 'rempl-env-publisher', resolvedParent).sync(subscriber);
    }

    return subscriber;
}

function createEnv(id) {
    return new EnvPublisher(id);
}

export { createEnv, getEnv };
//# sourceMappingURL=index.js.map
