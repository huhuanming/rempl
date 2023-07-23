import { Sandbox } from '../../types.js';
import { OnInitCallback } from '../../transport/event.js';
declare type Settings = {
    type: 'script';
    content: Record<string, string>;
    sandboxSrc?: string;
    window?: Window;
    container?: HTMLElement;
} | {
    type: 'url';
    content: string;
    window?: Window;
    container?: HTMLElement;
};
export declare function createSandbox(settings: Settings, callback: OnInitCallback): Sandbox;
export {};
