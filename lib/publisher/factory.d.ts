import { WsTransport } from '../transport/ws.js';
import { TransportPublisher } from './TransportPublisher.js';
import { GetRemoteUIHandler, PublisherOptions, PublisherWsSettings } from '../types.js';
export declare function getPublisher(id: string, getRemoteUI: GetRemoteUIHandler, options?: PublisherOptions): TransportPublisher;
export declare function resolveWsUri(settings: {
    explicit: string | undefined;
    implicit: string;
}, uri?: string): string | undefined;
export declare function connect(auto: boolean, createWsTransport: (uri: string) => WsTransport, fetchWsSettings: () => PublisherWsSettings, uri?: string): void;
