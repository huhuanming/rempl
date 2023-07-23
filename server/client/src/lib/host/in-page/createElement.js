'use strict';

function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }/* eslint-env browser */










function createElement (config) {
    function createElement(options) {
        const element = document.createElement(options.tagName || 'div');

        for (const [name, value] of Object.entries(options)) {
            switch (name) {
                case 'tagName':
                    break;

                case 'ref':
                    if (typeof value === 'string') {
                        map[value] = element;
                    }
                    break;

                case 'style':
                    element.setAttribute(
                        'style',
                        Object.entries(value)
                            .map(([property, value]) => property + ':' + value)
                            .join(';')
                    );
                    break;

                case 'events':
                    for (const event in options.events) {
                        element.addEventListener(event, options.events[event], false);
                    }
                    break;

                case 'children':
                    _optionalChain([options, 'access', _ => _.children, 'optionalAccess', _2 => _2.forEach, 'call', _3 => _3(function (child) {
                        element.appendChild(
                            typeof child === 'string'
                                ? document.createTextNode(child)
                                : createElement(child)
                        );
                    })]);
                    break;

                default:
                    element.setAttribute(name, value);
            }
        }

        return element;
    }

    const map = {};
    map.element = createElement(config);
    return map ;
}

module.exports = createElement;
