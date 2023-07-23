declare type Options<TRef extends string> = {
    tagName?: string;
    ref?: TRef;
    style?: Record<string, string>;
    events?: Record<string, () => void>;
    children?: Array<string | Options<TRef>>;
} & {
    [key: string]: any;
};
export default function <TRef extends string>(config: Options<TRef>): { [key in "element" | TRef]: HTMLElement; };
export {};
