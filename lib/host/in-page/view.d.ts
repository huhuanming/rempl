declare function showView(closeCallback: () => void): void;
declare function softHideView(): void;
declare function hideView(): void;
declare const _default: {
    show: typeof showView;
    hide: typeof hideView;
    softHide: typeof softHideView;
    getSandboxContainer(): HTMLElement;
    setPublisherList(publisherList: string[], selectPublisherFn: (id?: string) => void): void;
    selectPublisher(id: string): void;
};
export default _default;
