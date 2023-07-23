'use strict';

const Publisher = require('../classes/Publisher.cjs');

class TransportPublisher extends Publisher.Publisher {
    getRemoteUI;
    options;

    constructor(id, getRemoteUI, options) {
        super(id);

        this.options = options || {};
        this.getRemoteUI = (settings) => {
            try {
                return Promise.resolve(getRemoteUI(settings)).then((result) => {
                    if (result.type === 'script') {
                        // TODO: value should be a string
                        return {
                            type: 'script',
                            value: {
                                'publisher-ui.js': result.value,
                            },
                        };
                    }

                    return result;
                });
            } catch (e) {
                return Promise.reject(e);
            }
        };
    }
}

exports.TransportPublisher = TransportPublisher;
