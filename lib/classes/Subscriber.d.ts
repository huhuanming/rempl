import { DataMessage } from '../types.js';
import { AnyFn } from '../utils/index.js';
import { Namespace } from './Namespace.js';
import { Packet, Endpoint } from './Endpoint.js';
export declare type SubscriberPacket = DataMessage | Packet;
export declare class SubscriberNamespace extends Namespace {
    constructor(name: string, endpoint: Endpoint<SubscriberNamespace>);
    subscribe(fn: AnyFn): import("../utils/index.js").UnsubscribeFn;
}
export declare class Subscriber extends Endpoint<SubscriberNamespace> {
    type: string;
    get namespaceClass(): typeof SubscriberNamespace;
    constructor(id?: string);
    processInput(packet: SubscriberPacket, callback: AnyFn): void;
}
