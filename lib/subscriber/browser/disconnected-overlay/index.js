import __CSS__ from './style.js';

/* eslint-env browser */

let overlayEl = null;

function initOverlayEl() {
    if (overlayEl === null) {
        overlayEl = document.createElement('div');
        const shadow = overlayEl.attachShadow({ mode: 'closed' });
        const styleEl = document.createElement('style');
        const dotsEl = document.createElement('div');

        styleEl.textContent = __CSS__;
        dotsEl.append(
            ...Array.from({ length: 3 }, () => {
                const el = document.createElement('div');
                el.className = 'dot';
                return el;
            })
        );

        shadow.append(styleEl, dotsEl);
    }

    return overlayEl;
}

function setOverlayVisible(visible) {
    if (visible && typeof document !== 'undefined') {
        document.body.append(initOverlayEl());
    } else if (overlayEl) {
        overlayEl.remove();
    }
}

export { setOverlayVisible };
//# sourceMappingURL=index.js.map
