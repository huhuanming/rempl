class ReactiveValue {
    value;
    handler = null;

    constructor(value) {
        this.value = value;
    }

    /**
     * Set new value and call apply method if value has been changed.
     */
    set(value) {
        if (!Object.is(this.value, value)) {
            this.value = value;
            this.apply();
        }
    }

    /**
     * Returns current token value.
     */
    get() {
        return this.value;
    }

    /**
     * Adds a callback on token value changes.
     */
    on(fn, context) {
        let cursor = this.handler;

        while (cursor !== null) {
            if (cursor.fn === fn && cursor.context === context) {
                console.warn('ReactiveValue#on: duplicate fn & context pair');
            }

            cursor = cursor.handler;
        }

        this.handler = {
            fn,
            context,
            handler: this.handler,
        };
    }

    /**
     * Adds a callback on token value changes and invokes callback with current value.
     */
    link(fn, context) {
        this.on(fn, context);
        fn.call(context , this.value);
    }

    /**
     * Removes a callback. Must be passed the same arguments as for ReactiveValue#on() method.
     */
    off(fn, context) {
        // todo rework
        let cursor = this.handler;
        let prev = this;

        while (cursor !== null) {
            if (cursor.fn === fn && cursor.context === context) {
                // make it non-callable
                cursor.fn = function () {};

                // remove from list
                prev.handler = cursor.handler;

                return;
            }

            prev = cursor;
            cursor = cursor.handler;
        }

        console.warn('ReactiveValue#off: fn & context pair not found, nothing was removed');
    }

    /**
     * Call all callbacks with current token value.
     */
    apply() {
        // todo rework
        let cursor = this.handler;

        while (cursor !== null) {
            cursor.fn.call(cursor.context, this.value);
            cursor = cursor.handler;
        }
    }
}

export { ReactiveValue };
//# sourceMappingURL=ReactiveValue.js.map
