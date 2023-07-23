import { WsTransport } from '../transport/ws.js';
export declare function fetchWsSettings(): {
    explicit: string | undefined;
    implicit: string;
};
export declare class NodeWsTransport extends WsTransport {
    get type(): string;
    constructor(uri: string);
    setClientId(id: string): void;
    getInfo(): {
        pid: number;
        title: string;
        type: string;
        id: string | null;
        sessionId: string;
        publishers: string[];
    };
}
export declare function createNodeWsTransport(uri: string): NodeWsTransport;
