'use strict';

function getSubscriber() {
    throw new Error("[rempl] Subscriber doesn't supported on node.js");
}

exports.getSubscriber = getSubscriber;
