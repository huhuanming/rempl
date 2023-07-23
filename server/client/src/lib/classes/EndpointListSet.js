'use strict';

const EndpointList = require('./EndpointList.js');

class EndpointListSet extends EndpointList.EndpointList {
    __init() {this.endpointLists = new Set();}

    constructor() {
        super([]);EndpointListSet.prototype.__init.call(this);    }

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

exports.EndpointListSet = EndpointListSet;
