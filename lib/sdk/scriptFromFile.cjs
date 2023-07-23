'use strict';

const fs = require('fs');
const path = require('path');
const url = require('url');

function scriptFromFile(filename, includeRempl = false) {
    const remplPath = path.join(
        path.dirname(url.fileURLToPath((typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('sdk/scriptFromFile.cjs', document.baseURI).href)))),
        '../../dist/rempl.js'
    );
    let cache = null;

    // TODO: take in account settings.accept setting
    return function (settings) {
        if (!settings.dev && cache !== null) {
            return { type: 'script', value: cache };
        }

        return fs.promises.readFile(filename, 'utf-8').then((content) => {
            return {
                type: 'script',
                value: (cache = (includeRempl ? fs.readFileSync(remplPath, 'utf8') : '') + content),
            };
        });
    };
}

exports.scriptFromFile = scriptFromFile;
