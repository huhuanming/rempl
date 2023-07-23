'use strict';

const version = require('./utils/version.cjs');
const index = require('./env/browser/index.cjs');
const index$1 = require('./host/in-page/index.cjs');
const index$2 = require('./sandbox/browser/index.cjs');
const index$3 = require('./publisher/browser/index.cjs');
const index$4 = require('./subscriber/browser/index.cjs');
const scriptFromFile = require('./sdk/browser/scriptFromFile.cjs');



exports.version = version.version;
exports.createEnv = index.createEnv;
exports.getEnv = index.getEnv;
exports.getHost = index$1.getHost;
exports.createSandbox = index$2.createSandbox;
exports.connectPublisherWs = index$3.connectPublisherWs;
exports.createPublisher = index$3.createPublisher;
exports.getSelfSubscriber = index$4.getSelfSubscriber;
exports.getSubscriber = index$4.getSubscriber;
exports.scriptFromFile = scriptFromFile.scriptFromFile;
