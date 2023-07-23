import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

function scriptFromFile(filename, includeRempl = false) {
    const remplPath = path.join(
        path.dirname(fileURLToPath(import.meta.url)),
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

export { scriptFromFile };
//# sourceMappingURL=scriptFromFile.js.map
