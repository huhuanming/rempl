import { EndpointList } from './EndpointList.js';
export declare class EndpointListSet extends EndpointList {
    endpointLists: Set<EndpointList>;
    constructor();
    set(): void;
    add(endpointList: EndpointList): void;
    remove(endpointList: EndpointList): void;
}
