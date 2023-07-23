import socketIO from 'socket.io-client/dist/socket.io.slim.js';
import { WsTransport } from '../../transport/ws.js';
import { startIdentify, postIdentifyMessage, stopIdentify } from './identify/index.js';
import '../../utils/index.js';
import { globalThis as resolvedGlobalThis, top as resolvedTop } from '../../utils/global.js';

/* eslint-env browser */

const STORAGE_KEY = 'rempl:id';


function fetchWsSettings() {
    function fetchEnvVariable() {
        if (typeof REMPL_SERVER !== 'undefined' && REMPL_SERVER !== resolvedGlobalThis.REMPL_SERVER) {
            return REMPL_SERVER;
        }
    }

    function fetchMeta() {
        const meta =
            typeof document !== 'undefined'
                ? document.querySelector('meta[name="rempl:server"]')
                : undefined;

        return (meta && meta.getAttribute('content')) || undefined;
    }
    const location = {
        protocol: 'ws:',
        hostname: undefined,
    };
    const implicitUri = location.protocol + '//' + ('localhost') + ':8177';
    let explicitUri = undefined;
    let setup = fetchEnvVariable();

    if (setup === undefined) {
        setup = fetchMeta();
    }

    switch (setup) {
        case 'none':
        case undefined:
        case false:
            // no explicit setting
            break;

        case 'implicit':
        case 'auto':
        case true:
            explicitUri = implicitUri;
            break;

        default:
            if (typeof setup === 'string') {
                explicitUri = setup;
            }
    }

    return {
        explicit: explicitUri || implicitUri,
        implicit: implicitUri,
    };
}

class BrowserWsTransport extends WsTransport {
    constructor(uri) {
        super(uri, socketIO);

        const self = this;

        try {
            this.id = sessionStorage[STORAGE_KEY];
        } catch (e) {}

        this.socket
            .on(
                'rempl:identify',
                function (num, callback) {
                    startIdentify((this ).io.uri, num, callback);

                    for (const publisherId of self.publishers) {
                        postIdentifyMessage({
                            op: 'add-publisher',
                            id: publisherId,
                            name: publisherId,
                        });
                    }
                }
            )
            .on('rempl:stop identify', stopIdentify)
            .on('disconnect', stopIdentify);
    }

    get type() {
        return 'browser';
    }

    setClientId(id) {
        super.setClientId(id);
        try {
            sessionStorage[STORAGE_KEY] = this.id;
        } catch (e) {}
    }

    getInfo() {
        return {
            ...super.getInfo(),
            location: String(' '),
            title: resolvedTop?.REMPL_TITLE || resolvedTop?.document?.title || resolvedTop?.location?.href || 'Unknown',
        };
    }
}

function createBrowserWsTransport(uri) {
    return new BrowserWsTransport(uri);
}

export { BrowserWsTransport, createBrowserWsTransport, fetchWsSettings };
//# sourceMappingURL=transport-ws.js.map
