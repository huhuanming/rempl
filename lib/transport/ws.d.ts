/// <reference types="node" />
import { ReactiveValue } from '../classes/ReactiveValue.js';
import { EndpointList } from '../classes/EndpointList.js';
import { AnyFn } from '../utils/index.js';
import { GetRemoteUIInternalHandler } from '../types.js';
import { TransportPublisher } from '../publisher/TransportPublisher.js';
export declare type SelfInfo = Pick<WsTransport, 'id' | 'sessionId' | 'type' | 'publishers'>;
export declare type API = {
    connected: ReactiveValue<boolean>;
    send(...args: unknown[]): void;
    subscribe(fn: AnyFn): void;
};
interface Socket {
    emit(...args: unknown[]): void;
    on(event: string, callback: AnyFn): this;
}
export declare class WsTransport {
    static get(endpoint: string, socketIO: any): WsTransport;
    publishers: string[];
    publishersMap: Map<string, {
        getRemoteUI: GetRemoteUIInternalHandler;
    }>;
    dataCallbacks: Array<{
        endpoint: string | null;
        fn: AnyFn;
    }>;
    connected: ReactiveValue<boolean>;
    ownEndpoints: EndpointList;
    remoteEndpoints: EndpointList;
    socket: Socket;
    sessionId: string;
    id: string | null;
    sendInfoTimer: number | NodeJS.Timeout | null;
    info: SelfInfo;
    constructor(uri: string, socketIO: any);
    get type(): string;
    setClientId(id: string): void;
    /**
     * Send data through WS
     */
    send(name: string, arg: unknown, callback?: AnyFn): void;
    /**
     * Get self info
     */
    getInfo(): SelfInfo;
    /**
     * Send self info to server
     */
    sendInfo(): void;
    createApi(publisher: TransportPublisher): API | undefined;
    sync(publisher: TransportPublisher): void;
}
export {};
