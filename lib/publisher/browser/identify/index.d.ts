declare type StopIdentifyMessage = {
    op: 'stop-identify';
};
declare type AddPublisherMessage = {
    op: 'add-publisher';
    id: string;
    name: string;
};
declare type Message = StopIdentifyMessage | AddPublisherMessage;
export declare function postIdentifyMessage(params: Message): void;
export declare function startIdentify(origin: string, num: number | string, callback: (publisherId: string) => void): void;
export declare function stopIdentify(): void;
export {};
