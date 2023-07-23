import { GetRemoteUIHandler, PublisherOptions } from '../../types.js';
export declare function createPublisher(id: string, getRemoteUI: GetRemoteUIHandler, options?: PublisherOptions): import("../../types.js").PublisherNamespace & {
    ns: <K extends string>(name: K) => import("../../types.js").PublisherNamespace;
};
export declare function connectPublisherWs(uri?: string): void;
