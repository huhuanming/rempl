import { trustedEmptyHTML } from '../../utils/index.js';
import createElement from './createElement.js';
import styles from './style.js';

/* eslint-env browser */










let publishers = [];
let selectedPublisher = null;
let selectPublisher = () => {};
let view = null;
let onClose;

// settings persistance
const settings = {};

function setSetting(name, value) {
    settings[name] = value;
    try {
        localStorage.rempl = JSON.stringify(settings);
    } catch (e) {}
}

function updateTabSelectedState(tabEl) {
    tabEl.classList.toggle('tab_selected', tabEl.getAttribute('publisher') === selectedPublisher);
}

function updatePublisherList() {
    const { tabs } = getView();

    tabs.innerHTML = trustedEmptyHTML;

    for (const publisher of publishers) {
        const { element } = createElement({
            publisher,
            class: 'tab',
            children: [publisher],
            events: {
                click() {
                    selectPublisher(publisher);
                },
            },
        });

        updateTabSelectedState(element);
        tabs.appendChild(element);
    }
}

function getView() {
    if (view === null) {
        const wrapperEl = document.createElement('div');
        const shadow = wrapperEl.attachShadow({ mode: 'open' });
        const styleEl = document.createElement('style');
        const content = createElement({
            class: 'host',
            children: [
                {
                    class: 'toolbar',
                    children: [
                        {
                            ref: 'tabs',
                            style: {
                                display: 'flex',
                                flex: '1',
                            },
                        },
                        {
                            ref: 'buttons',
                            class: 'layout-buttons',
                            children: [
                                ...(
                                    ['left', 'top', 'bottom', 'right', 'fit the page'] 
                                ).map((side) => ({
                                    side,
                                    title: `Dock to ${side}`,
                                    class: 'layout-button',
                                    events: {
                                        click() {
                                            wrapperEl.setAttribute('side', side);
                                            setSetting('host-dock', side);
                                        },
                                    },
                                })),
                                {
                                    class: 'close-button',
                                    events: {
                                        click() {
                                            onClose?.();
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    ref: 'sandbox',
                    class: 'sandbox',
                },
            ],
        });

        try {
            Object.assign(settings, JSON.parse(localStorage.rempl || '{}'));
        } catch (e) {}

        wrapperEl.setAttribute('side', settings['host-dock'] || 'bottom');
        styleEl.append(document.createTextNode(styles));
        shadow.append(styleEl);
        shadow.append(content.element);

        view = {
            wrapper: wrapperEl,
            ...content,
        };
        updatePublisherList();
    }

    return view;
}

function showView(closeCallback) {
    const { wrapper } = getView();

    onClose = closeCallback;

    wrapper.style.display = '';
    if (!document.contains(wrapper)) {
        (document.body || document.documentElement).append(wrapper);
    }
}

function softHideView() {
    getView().wrapper.style.display = 'none';
}

function hideView() {
    getView().wrapper.remove();
}

const view$1 = {
    show: showView,
    hide: hideView,
    softHide: softHideView,
    getSandboxContainer() {
        return getView().sandbox;
    },
    setPublisherList(publisherList, selectPublisherFn) {
        publishers = publisherList;
        selectPublisher = selectPublisherFn;
        updatePublisherList();
    },
    selectPublisher(id) {
        if (selectedPublisher !== id) {
            selectedPublisher = id;

            if (view) {
                Array.from(getView().tabs.children).forEach((el) =>
                    updateTabSelectedState(el )
                );
            }
        }
    },
};

export { view$1 as default };
//# sourceMappingURL=view.js.map
