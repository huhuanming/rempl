'use strict';

const style = require('./style.cjs');

/* eslint-env browser */





const identifyWidgetId = 'rempl-identify-widget';
let cancelOverlay = null;

function createOverlay(origin, num) {
    const overlayEl = document.createElement('div');
    const shadow = overlayEl.attachShadow({ mode: 'closed' });
    const styleEl = document.createElement('style');
    const buttonsEl = document.createElement('div');
    const headerEl = document.createElement('h1');

    overlayEl.id = identifyWidgetId;
    overlayEl.dataset.origin = origin;
    headerEl.textContent = num;
    styleEl.textContent = style;

    shadow.append(styleEl, headerEl, buttonsEl);

    return {
        overlayEl,
        createButton(name, pickPublisher) {
            const wrapperEl = buttonsEl.appendChild(document.createElement('div'));
            const buttonEl = wrapperEl.appendChild(document.createElement('button'));

            wrapperEl.setAttribute('style', 'margin-bottom:5px');

            buttonEl.textContent = name;
            buttonEl.addEventListener('click', pickPublisher);
        },
    };
}

function postIdentifyMessage(params) {
    postMessage({ to: identifyWidgetId, ...params });
}

function startIdentify(
    origin,
    num,
    callback
) {
    if (typeof document === 'undefined') {
        return;
    }

    const existingWidget = document.querySelector('#' + identifyWidgetId);

    if (!existingWidget || (existingWidget ).dataset.origin !== origin) {
        if (existingWidget) {
            postMessage({ op: 'stop-identify' });
        }

        const { overlayEl, createButton } = createOverlay(origin, String(num));

        const documentStyleOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.body.appendChild(overlayEl);

        const onMessageCallback = (
            event
        ) => {
            const { data } = event;

            if (data?.to === identifyWidgetId) {
                switch (data.op) {
                    case 'add-publisher':
                        createButton(data.name || data.id, () => callback(data.id));
                        break;

                    case 'stop-identify':
                        console.log('stop-indentify');
                        cancelOverlay?.();
                        break;
                }
            }
        };

        addEventListener('message', onMessageCallback);

        cancelOverlay = () => {
            removeEventListener('message', onMessageCallback);
            document.body.style.overflow = documentStyleOverflow;
            overlayEl.remove();
            cancelOverlay = null;
        };
    }
}

function stopIdentify() {
    if (typeof cancelOverlay === 'function') {
        cancelOverlay();
    }
}

exports.postIdentifyMessage = postIdentifyMessage;
exports.startIdentify = startIdentify;
exports.stopIdentify = stopIdentify;
