import { WsTransport } from '../../transport/ws.js';
export declare function fetchWsSettings(): {
    explicit: string;
    implicit: string;
};
export declare class BrowserWsTransport extends WsTransport {
    constructor(uri: string);
    get type(): string;
    setClientId(id: string): void;
    getInfo(): {
        location: string;
        title: any;
        type: string;
        id: string | null;
        sessionId: string;
        publishers: string[];
    };
}
export declare function createBrowserWsTransport(uri: string): BrowserWsTransport;
