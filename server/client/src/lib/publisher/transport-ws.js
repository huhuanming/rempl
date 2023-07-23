'use strict';

const fs = require('fs');
const path = require('path');
const socketIO = require('socket.io-client');
const ws = require('../transport/ws.js');

const CLIENT_ID_FILENAME = path.resolve('.rempl_endpoint_id'); // FIXME: dirty solution

function fetchWsSettings() {
    function fetchEnvVariable() {
        return process.env.REMPL_SERVER;
    }

    const setup = fetchEnvVariable();
    const implicitUri = 'ws://localhost:8177';
    let explicitUri = undefined;

    switch (setup) {
        case 'none':
        case 'false':
        case undefined:
            // no explicit setting
            break;

        case 'implicit':
        case 'auto':
        case 'true':
            explicitUri = implicitUri;
            break;

        default:
            if (typeof setup === 'string') {
                explicitUri = setup;
            }
    }

    return {
        explicit: explicitUri,
        implicit: implicitUri,
    };
}

class NodeWsTransport extends ws.WsTransport {
    get type() {
        return 'node';
    }

    constructor(uri) {
        super(uri, socketIO);

        // TODO make it through temp file
        if (fs.existsSync(CLIENT_ID_FILENAME)) {
            this.id = fs.readFileSync(CLIENT_ID_FILENAME, 'utf-8');
        }
    }

    setClientId(id) {
        super.setClientId(id);
        fs.writeFileSync(CLIENT_ID_FILENAME, String(this.id));
    }

    getInfo() {
        return {
            ...super.getInfo(),
            pid: process.pid,
            title: process.title,
        };
    }
}

function createNodeWsTransport(uri) {
    return new NodeWsTransport(uri);
}

exports.NodeWsTransport = NodeWsTransport;
exports.createNodeWsTransport = createNodeWsTransport;
exports.fetchWsSettings = fetchWsSettings;
