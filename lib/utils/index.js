import { globalThis as resolvedGlobalThis } from './global.js';
export { globalThis, opener, parent, top } from './global.js';

const trustedEmptyHTML = resolvedGlobalThis.trustedTypes?.emptyHTML;








function genUID(len) {
    function base36(val) {
        return Math.round(val).toString(36);
    }

    // uid should starts with alpha
    let result = base36(10 + 25 * Math.random());

    if (!len) {
        len = 16;
    }

    while (result.length < len) {
        result += base36(Date.now() * Math.random());
    }

    return result.substr(0, len);
}



function subscribe(list, item) {
    list.push(item);

    return () => {
        const idx = list.indexOf(item);

        if (idx !== -1) {
            list.splice(idx, 1);
        }
    };
}

export { genUID, subscribe, trustedEmptyHTML };
//# sourceMappingURL=index.js.map