import { ReactiveValue } from './ReactiveValue.js';
export declare class EndpointList extends ReactiveValue<string[]> {
    constructor(list?: string[]);
    set(newValue: string[]): void;
}
