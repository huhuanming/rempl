'use strict';

/* eslint-env browser */










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
                    options.children?.forEach(function (child) {
                        element.appendChild(
                            typeof child === 'string'
                                ? document.createTextNode(child)
                                : createElement(child)
                        );
                    });
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
