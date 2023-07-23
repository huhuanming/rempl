/// <reference types="node" />
import { CallMessage, RemoteMethodsMessage, GetProvidedMethodsMessage, MethodsMap } from '../types.js';
import { AnyFn } from '../utils/index.js';
import { Namespace } from './Namespace.js';
import { ReactiveValue } from './ReactiveValue.js';
import { EndpointListSet } from './EndpointListSet.js';
import { EndpointList } from './EndpointList.js';
export declare type Channel = {
    type: string;
    send: AnyFn;
};
export declare type Packet = CallMessage | RemoteMethodsMessage | GetProvidedMethodsMessage;
export declare class Endpoint<TNamespace extends Namespace> {
    id: string | null;
    namespaces: {
        [key: string]: TNamespace;
    };
    get namespaceClass(): typeof Namespace;
    type: string;
    channels: Channel[];
    connected: ReactiveValue<boolean>;
    remoteEndpoints: EndpointListSet;
    providedMethodsUpdateTimer?: number | NodeJS.Timeout | null;
    constructor(id?: string);
    getName(): string;
    ns<K extends string>(name: K): TNamespace;
    send<T = Packet>(packet: T, callback?: ((...args: unknown[]) => void) | null): void;
    requestRemoteApi(): void;
    setRemoteApi(api?: MethodsMap): void;
    getProvidedApi(): MethodsMap;
    scheduleProvidedMethodsUpdate(): void;
    processInput(packet: Packet, callback: AnyFn): void;
    setupChannel(type: string, send: AnyFn, remoteEndpoints: EndpointList, available: boolean): void;
}
