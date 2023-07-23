import { Publisher } from '../classes/Publisher.js';
import { GetRemoteUIHandler, PublisherOptions, GetRemoteUIInternalResult, GetRemoteUISettings } from '../types.js';
export declare class TransportPublisher extends Publisher {
    getRemoteUI: (settings: GetRemoteUISettings) => Promise<GetRemoteUIInternalResult>;
    options: PublisherOptions;
    constructor(id: string, getRemoteUI: GetRemoteUIHandler, options?: PublisherOptions);
}
