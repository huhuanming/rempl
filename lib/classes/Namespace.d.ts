import { AnyFn } from '../utils/index.js';
import { Endpoint } from './Endpoint.js';
export declare type Method<T extends unknown[]> = (...args: T) => unknown;
export declare type NamespaceMethods = Record<string, Method<unknown[]>>;
export declare type Wrapper = ((...args: unknown[]) => Promise<unknown>) & {
    available: boolean;
};
export declare type ListenerCallback = (methods: string[]) => void;
export declare type Listener = {
    event: string;
    callback: ListenerCallback;
    listeners: Listener | null;
};
export declare class Namespace {
    name: string;
    owner: Endpoint<Namespace>;
    methods: NamespaceMethods;
    remoteMethodWrappers: Record<string, Wrapper>;
    remoteMethods: string[];
    listeners: Listener | null;
    constructor(name: string, owner: Endpoint<Namespace>);
    isMethodProvided(methodName: string): boolean;
    provide<TReturn extends unknown[]>(methodName: string | NamespaceMethods, fn?: Method<TReturn>): void;
    revoke(methodName: string | string[]): void;
    isRemoteMethodExists(methodName: string): boolean;
    callRemote(method: string, ...args: unknown[]): Promise<unknown>;
    getRemoteMethod(methodName: string): Wrapper;
    onRemoteMethodsChanged(callback: ListenerCallback): AnyFn;
    static invoke(namespace: Namespace, method: string, args: unknown[], callback: AnyFn): void;
    static notifyRemoteMethodsChanged(namespace: Namespace): void;
}
