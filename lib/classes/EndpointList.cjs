'use strict';

const ReactiveValue = require('./ReactiveValue.cjs');

function normalize(oldList, newList) {
    const uniqueItems = [...new Set(Array.isArray(newList) ? newList : [])];
    const diff =
        uniqueItems.length !== oldList.length ||
        uniqueItems.some((endpoint) => !oldList.includes(endpoint));

    return diff ? uniqueItems : oldList;
}

class EndpointList extends ReactiveValue.ReactiveValue {
    constructor(list) {
        super(normalize([], list));
    }

    set(newValue) {
        super.set(normalize(this.value, newValue));
    }
}

exports.EndpointList = EndpointList;
