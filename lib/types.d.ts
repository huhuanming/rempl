import type { Publisher } from './classes/Publisher.js';
export type { Endpoint } from './classes/Endpoint.js';
export type { EndpointList } from './classes/EndpointList.js';
export type { EndpointListSet } from './classes/EndpointListSet.js';
export type { Namespace } from './classes/Namespace.js';
export type { ReactiveValue } from './classes/ReactiveValue.js';
export type { Publisher, PublisherNamespace } from './classes/Publisher.js';
export type { Subscriber, SubscriberNamespace } from './classes/Subscriber.js';
export type { EventTransport } from './transport/event.js';
export type { WsTransport } from './transport/ws.js';
export declare type MethodsMap = Record<string, string[]>;
export declare type CallMessage = {
    type: 'call';
    ns?: string;
    method: string;
    args: unknown[];
};
export declare type RemoteMethodsMessage = {
    type: 'remoteMethods';
    methods: MethodsMap;
};
export declare type GetProvidedMethodsMessage = {
    type: 'getProvidedMethods';
};
export declare type DataMessage = {
    type: string;
    ns?: string;
    payload: unknown;
};
export declare type EventTransportHandshakePayload = {
    type: 'handshake';
    initiator: EventTransportEndpoint;
    inited: boolean;
    endpoints: string[];
};
export declare type ConnectEventMessagePayload = {
    type: 'connect';
    endpoints: string[];
};
export declare type DisconnectEventMessagePayload = {
    type: 'disconnect';
};
export declare type EndpointsEventMessagePayload = {
    type: 'endpoints';
    data: [endpoints: string[]];
};
export declare type CallbackEventMessagePayload = {
    type: 'callback';
    data: unknown[];
    callback: string | null;
};
export declare type DataEventMessagePayload = {
    type: 'data';
    endpoint: string | null;
    data: unknown[];
    callback: string | null;
};
export declare type GetRemoveUIEventMessagePayload = {
    type: 'getRemoteUI';
    endpoint: string | null;
    data: [settings: GetRemoteUISettings];
    callback: string | null;
};
export declare type EventTransportMessagePayload = ConnectEventMessagePayload | EndpointsEventMessagePayload | DisconnectEventMessagePayload | CallbackEventMessagePayload | DataEventMessagePayload | GetRemoveUIEventMessagePayload;
export declare type EventTransportEndpoint = 'rempl-sandbox' | 'rempl-subscriber' | 'rempl-inpage-publisher' | 'rempl-inpage-host' | 'rempl-browser-extension-publisher' | 'rempl-browser-extension-host' | 'rempl-self-publisher' | 'rempl-self-subscriber' | 'rempl-env-publisher' | 'rempl-env-subscriber';
export declare type EventTransportConnectTo = `${EventTransportEndpoint}:connect`;
export declare type EventTransportChannelId = `${EventTransportEndpoint}/${string}`;
export declare type EventTransportHandshakeMessage = {
    from: EventTransportChannelId;
    to: EventTransportConnectTo;
    payload: EventTransportHandshakePayload;
};
export declare type EventTransportDataMessage = {
    from: EventTransportChannelId;
    to: EventTransportChannelId;
    payload: EventTransportMessagePayload;
};
export declare type EventTransportMessage = EventTransportHandshakeMessage | EventTransportDataMessage;
export declare type GetRemoteUISettings = {
    dev?: boolean;
    [key: string]: unknown;
};
export declare type GetRemoteUIResult = {
    type: 'script';
    value: string;
} | {
    type: 'url';
    value: string;
};
export declare type GetRemoteUIHandler = (settings: GetRemoteUISettings) => GetRemoteUIResult | Promise<GetRemoteUIResult>;
export declare type GetRemoteUIInternalResult = {
    error: string;
} | {
    type: 'script';
    value: Record<string, string>;
} | {
    type: 'url';
    value: string;
};
export declare type GetRemoteUIInternalHandler = (settings: GetRemoteUISettings) => Promise<GetRemoteUIInternalResult>;
export declare type PublisherOptions = {
    ws?: string;
};
export declare type PublisherWsSettings = {
    explicit: string | undefined;
    implicit: string;
};
export declare type Host = {
    activate(publisher?: Publisher | string): void;
    deactivate(publisher?: Publisher | string): void;
};
export declare type Sandbox = {
    setConnected(state: boolean): void;
    destroy(): void;
};
