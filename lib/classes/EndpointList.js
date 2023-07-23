import { ReactiveValue } from './ReactiveValue.js';

function normalize(oldList, newList) {
    const uniqueItems = [...new Set(Array.isArray(newList) ? newList : [])];
    const diff =
        uniqueItems.length !== oldList.length ||
        uniqueItems.some((endpoint) => !oldList.includes(endpoint));

    return diff ? uniqueItems : oldList;
}

class EndpointList extends ReactiveValue {
    constructor(list) {
        super(normalize([], list));
    }

    set(newValue) {
        super.set(normalize(this.value, newValue));
    }
}

export { EndpointList };
//# sourceMappingURL=EndpointList.js.map
