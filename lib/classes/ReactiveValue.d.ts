export declare type OnChangeCallback<TContext, T> = (this: TContext, value: T) => void;
export declare type Handler<T> = {
    fn(value: T): void;
    context: unknown;
    handler: Handler<T> | null;
};
export declare class ReactiveValue<T> {
    value: T;
    handler: Handler<T> | null;
    constructor(value: T);
    /**
     * Set new value and call apply method if value has been changed.
     */
    set(value: T): void;
    /**
     * Returns current token value.
     */
    get(): T;
    /**
     * Adds a callback on token value changes.
     */
    on<TContext>(fn: OnChangeCallback<TContext, T>, context?: TContext): void;
    /**
     * Adds a callback on token value changes and invokes callback with current value.
     */
    link<TContext>(fn: OnChangeCallback<TContext, T>, context?: TContext): void;
    /**
     * Removes a callback. Must be passed the same arguments as for ReactiveValue#on() method.
     */
    off<TContext>(fn: OnChangeCallback<TContext, T>, context?: TContext): void;
    /**
     * Call all callbacks with current token value.
     */
    apply(): void;
}
