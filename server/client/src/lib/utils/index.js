'use strict';

const fakeGlobal = require('./fakeGlobal.js');

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
const trustedEmptyHTML = _optionalChain([fakeGlobal.globalThis, 'access', _ => _.trustedTypes, 'optionalAccess', _2 => _2.emptyHTML]);








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

exports.globalThis = fakeGlobal.globalThis;
exports.opener = fakeGlobal.opener;
exports.parent = fakeGlobal.parent;
exports.top = fakeGlobal.top;
exports.genUID = genUID;
exports.subscribe = subscribe;
exports.trustedEmptyHTML = trustedEmptyHTML;
