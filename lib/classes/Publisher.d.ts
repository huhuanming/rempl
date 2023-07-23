import { Namespace } from './Namespace.js';
import { Endpoint } from './Endpoint.js';
export declare type PipeFn = (...args: unknown[]) => unknown;
export declare class PublisherNamespace extends Namespace {
    _lastData: unknown;
    publish: (payload: unknown) => void;
    constructor(name: string, owner: Publisher);
}
export declare class Publisher extends Endpoint<PublisherNamespace> {
    type: string;
    get namespaceClass(): typeof PublisherNamespace;
}
