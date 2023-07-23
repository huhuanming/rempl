import { globalThis } from '../../utils/global.js';
import { Publisher } from '../../classes/Publisher.js';
import { Subscriber } from '../../classes/Subscriber.js';
declare class EnvPublisher extends Publisher {
    linkWindow(target: Window | typeof globalThis): void;
}
export declare function getEnv(id: string): Subscriber;
export declare function createEnv(id?: string): EnvPublisher;
export {};
