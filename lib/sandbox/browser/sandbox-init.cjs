'use strict';

function initSandboxScript() {
    addEventListener('message', function handleMessage(event) {
        const { action, scripts } = event.data || {};

        if (action === 'rempl-sandbox-init-scripts' && scripts) {
            // handle message only once
            removeEventListener('message', handleMessage);

            // evaluate scripts
            for (const [sourceURL, source] of Object.entries(scripts)) {
                // indirect eval, see detail: https://esbuild.github.io/content-types/#direct-eval
                Function(`${source}\n//# sourceURL=${sourceURL}`)();
            }
        }
    });
}

exports.initSandboxScript = initSandboxScript;
