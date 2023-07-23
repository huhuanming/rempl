import { EndpointList } from './EndpointList.js';

class EndpointListSet extends EndpointList {
    endpointLists = new Set();

    constructor() {
        super([]);
    }

    set() {
        super.set(
            ([] ).concat(
                ...[...this.endpointLists].map((endpointList) => endpointList.value)
            )
        );
    }

    add(endpointList) {
        if (!this.endpointLists.has(endpointList)) {
            this.endpointLists.add(endpointList);
            endpointList.on(this.set, this);
            this.set();
        }
    }

    remove(endpointList) {
        if (this.endpointLists.has(endpointList)) {
            this.endpointLists.delete(endpointList);
            endpointList.off(this.set, this);
            this.set();
        }
    }
}

export { EndpointListSet };
//# sourceMappingURL=EndpointListSet.js.map