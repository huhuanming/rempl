export declare function getSubscriber(): import("../../classes/Subscriber.js").SubscriberNamespace & {
    connected: import("../../types.js").ReactiveValue<boolean>;
    ns: <K extends string>(name: K) => import("../../classes/Subscriber.js").SubscriberNamespace;
};
export declare function getSelfSubscriber(id: string): import("../../classes/Subscriber.js").SubscriberNamespace & {
    connected: import("../../types.js").ReactiveValue<boolean>;
    ns: <K extends string>(name: K) => import("../../classes/Subscriber.js").SubscriberNamespace;
};
