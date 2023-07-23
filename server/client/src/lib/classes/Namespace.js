'use strict';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }













class Namespace {
    
    
    __init() {this.methods = Object.create(null);}
    __init2() {this.remoteMethodWrappers = Object.create(null);}
    __init3() {this.remoteMethods = [];}
    __init4() {this.listeners = null;}

    constructor(name, owner) {Namespace.prototype.__init.call(this);Namespace.prototype.__init2.call(this);Namespace.prototype.__init3.call(this);Namespace.prototype.__init4.call(this);
        this.name = name;
        this.owner = owner;
        this.methods = Object.create(null);
    }

    isMethodProvided(methodName) {
        return methodName in this.methods;
    }

    provide(
        methodName,
        fn
    ) {
        if (typeof methodName === 'string') {
            if (typeof fn === 'function') {
                this.methods[methodName] = fn ;
                this.owner.scheduleProvidedMethodsUpdate();
            }
        } else {
            const methods = methodName;

            for (const [methodName, fn] of Object.entries(methods)) {
                if (typeof fn === 'function') {
                    this.methods[methodName] = fn;
                    this.owner.scheduleProvidedMethodsUpdate();
                }
            }
        }
    }

    revoke(methodName) {
        if (Array.isArray(methodName)) {
            methodName.forEach(this.revoke, this);
        } else {
            if (this.isMethodProvided(methodName)) {
                delete this.methods[methodName];
                this.owner.scheduleProvidedMethodsUpdate();
            }
        }
    }

    isRemoteMethodExists(methodName) {
        return this.remoteMethods.includes(methodName);
    }

    callRemote(method, ...args) {
        let callback = null;

        if (args.length && typeof args[args.length - 1] === 'function') {
            callback = args.pop() ;
            console.warn(
                '[rempl] Using a callback for Namespace#callMethod() is deprecated, use returned promise value instead'
            );
        }

        return new Promise((resolve) => {
            const callPacket = {
                type: 'call',
                ns: this.name,
                method,
                args,
            };

            this.owner.send(callPacket, (...args) => {
                resolve(args[0]);
                _optionalChain([callback, 'optionalCall', _ => _(...args)]);
            });
        });
    }

    getRemoteMethod(methodName) {
        let methodWrapper = this.remoteMethodWrappers[methodName];

        if (typeof methodWrapper !== 'function') {
            methodWrapper = this.remoteMethodWrappers[methodName] = Object.assign(
                (...args) => {
                    if (methodWrapper.available) {
                        return this.callRemote(methodName, ...args);
                    }

                    return Promise.reject(
                        new Error(
                            `[rempl] ${this.owner.getName()} ns("${
                                this.name
                            }") has no available remote method "${methodName}`
                        )
                    );
                },
                {
                    available: this.remoteMethods.indexOf(methodName) !== -1,
                }
            );
        }

        return methodWrapper;
    }

    onRemoteMethodsChanged(callback) {
        const listener = {
            event: 'remoteMethodsChanged',
            callback,
            listeners: this.listeners,
        };

        this.listeners = listener;

        callback([...this.remoteMethods]);

        return () => {
            let cursor = this.listeners;
            let prev = this;

            while (cursor !== null) {
                if (cursor === listener) {
                    prev.listeners = cursor.listeners;
                    break;
                }

                prev = cursor;
                cursor = cursor.listeners;
            }
        };
    }

    static invoke(namespace, method, args, callback) {
        // add a callback to args even if no callback, to avoid extra checking
        // that callback is passed by remote side
        let callbackCalled = false;
        args = args.concat((...args) => {
            callbackCalled = true;
            callback(...args);
            console.warn(
                '[rempl] Using a callback in provided methods has been deprecated, just return a value or promise instead'
            );
        });

        // invoke the provided remote method
        Promise.resolve(namespace.methods[method].apply(null, args)).then((value) => {
            if (!callbackCalled) {
                callback(value);
            }
        });
    }

    static notifyRemoteMethodsChanged(namespace) {
        let cursor = namespace.listeners;

        for (const method in namespace.remoteMethodWrappers) {
            namespace.remoteMethodWrappers[method].available =
                namespace.remoteMethods.includes(method);
        }

        while (cursor !== null) {
            if (cursor.event === 'remoteMethodsChanged') {
                cursor.callback.call(null, [...namespace.remoteMethods]);
            }

            cursor = cursor.listeners;
        }
    }
}

exports.Namespace = Namespace;
