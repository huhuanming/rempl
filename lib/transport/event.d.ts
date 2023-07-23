import { ReactiveValue } from '../classes/ReactiveValue.js';
import { EndpointList } from '../classes/EndpointList.js';
import { EndpointListSet } from '../classes/EndpointListSet.js';
import * as utils from '../utils/index.js';
import { globalThis, AnyFn, UnsubscribeFn } from '../utils/index.js';
import { GetRemoteUIInternalHandler, EventTransportHandshakePayload, EventTransportMessagePayload, EventTransportConnectTo, EventTransportEndpoint, EventTransportChannelId } from '../types.js';
import { EventTransportMessage } from '../types.js';
import { Publisher } from '../classes/Publisher.js';
import { Subscriber } from '../classes/Subscriber.js';
export declare type TransportEndpoint = (Publisher | Subscriber | {
    id?: string;
}) & {
    getRemoteUI?: GetRemoteUIInternalHandler;
};
export declare type OnInitCallbackArg = {
    connected: ReactiveValue<boolean>;
    subscribe(fn: AnyFn): UnsubscribeFn;
    getRemoteUI(callback?: AnyFn): void;
    send(...args: unknown[]): void;
};
export declare type OnInitCallback = (arg: OnInitCallbackArg) => void;
export declare type OnInitFnArgs = [endpoint: TransportEndpoint, callback: OnInitCallback];
export declare type Connection = {
    ttl: number;
    endpoints: EndpointList;
};
export declare type CallbackPayload<TArgs extends unknown[]> = {
    type: 'callback';
    callback(...args: TArgs): void;
    data: TArgs;
};
export declare class EventTransport {
    static get(name: EventTransportEndpoint, connectTo: EventTransportEndpoint, win?: Window | typeof globalThis): EventTransport;
    name: EventTransportEndpoint;
    connectTo: EventTransportEndpoint;
    realm: Window | typeof globalThis;
    inputChannelId: EventTransportChannelId;
    connections: Map<`rempl-sandbox/${string}` | `rempl-subscriber/${string}` | `rempl-inpage-publisher/${string}` | `rempl-inpage-host/${string}` | `rempl-browser-extension-publisher/${string}` | `rempl-browser-extension-host/${string}` | `rempl-self-publisher/${string}` | `rempl-self-subscriber/${string}` | `rempl-env-publisher/${string}` | `rempl-env-subscriber/${string}`, Connection>;
    connected: ReactiveValue<boolean>;
    endpointGetUI: Map<string, GetRemoteUIInternalHandler>;
    ownEndpoints: EndpointList;
    remoteEndpoints: EndpointListSet;
    initCallbacks: OnInitFnArgs[];
    dataCallbacks: Array<{
        endpoint: string;
        fn: AnyFn;
    }>;
    sendCallbacks: Map<string, utils.AnyFn>;
    inited: boolean;
    constructor(name: EventTransportEndpoint, connectTo: EventTransportEndpoint, win?: Window | typeof globalThis);
    _handshake(inited: boolean): void;
    _onMessage(event: MessageEvent<EventTransportMessage>): void;
    _onConnect(from: EventTransportChannelId, payload: EventTransportHandshakePayload): void;
    _onData(from: EventTransportChannelId, payload: EventTransportMessagePayload): void;
    _wrapCallback(to: EventTransportChannelId, callback: string): (...args: unknown[]) => void;
    _send(to: EventTransportConnectTo, payload: EventTransportHandshakePayload): void;
    _send(to: EventTransportChannelId, payload: EventTransportMessagePayload): void;
    subscribeToEndpoint(endpoint: string | null, fn: AnyFn): utils.UnsubscribeFn;
    sendToEndpoint<M extends Extract<EventTransportMessagePayload, {
        endpoint: string | null;
    }>, K extends M['type']>(endpoint: string | null, type: K, ...args: any): void;
    send(payload: EventTransportMessagePayload): void;
    onInit(endpoint: TransportEndpoint, callback: OnInitCallback): this;
    sync(endpoint: Publisher | Subscriber): this;
}
