export * from './global.js';
export declare const trustedEmptyHTML: any;
export declare type Fn<TArgs extends unknown[], TReturn, TThis = unknown> = (this: TThis, ...args: TArgs) => TReturn;
export declare type AnyFn = Fn<any[], any>;
export declare function genUID(len?: number): string;
export declare type UnsubscribeFn = () => void;
export declare function subscribe<TItem>(list: TItem[], item: TItem): UnsubscribeFn;
