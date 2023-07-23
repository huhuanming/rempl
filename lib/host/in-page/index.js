import { trustedEmptyHTML } from '../../utils/index.js';
import { EventTransport } from '../../transport/event.js';
import { createSandbox } from '../../sandbox/browser/index.js';
import view from './view.js';

let publishers = [];
let selectedPublisherId = null;
let autoSelectPublisher = false;
let teardownTimer;
let transport = null;
let sandbox = null;
let host = null;

function cleanupSandbox() {
    if (sandbox !== null) {
        sandbox.destroy();
        sandbox = null;
    }
}

function selectPublisher(publisherId = null) {
    if (!publisherId) {
        publisherId = null;
    }

    if (publisherId !== selectedPublisherId) {
        autoSelectPublisher = false;
        selectedPublisherId = publisherId;

        if (selectedPublisherId) {
            view.selectPublisher(selectedPublisherId);
            view.show((host ).deactivate);
            (transport ).onInit(
                { id: selectedPublisherId },
                function initSandbox(papi) {
                    papi.getRemoteUI((error, type, content) => {
                        const sandboxContainerEl = view.getSandboxContainer();

                        cleanupSandbox();

                        if (error) {
                            const errorEl = document.createElement('div');
                            errorEl.append('Error on loading UI: ', error);
                            errorEl.setAttribute(
                                'style',
                                'margin:10px;padding:5px 10px;border-radius:3px;border:1px solid #eba8a8;color:#f34040;background:#ffe0e0;'
                            );

                            sandboxContainerEl.innerHTML = trustedEmptyHTML;
                            sandboxContainerEl.append(errorEl);
                        } else {
                            sandbox = createSandbox(
                                {
                                    container: sandboxContainerEl,
                                    type,
                                    content,
                                },
                                (api) => {
                                    papi.subscribe(api.send);
                                    api.subscribe(papi.send);
                                }
                            );
                            sandbox.setConnected(true);
                        }
                    });
                }
            );
        } else {
            view.hide();
            cleanupSandbox();
        }
    }
}

function getHost() {
    if (host !== null) {
        return host;
    }

    transport = EventTransport.get('rempl-inpage-host', 'rempl-inpage-publisher');
    transport.remoteEndpoints.on((endpoints) => {
        publishers = endpoints;
        view.setPublisherList(publishers, selectPublisher);

        if (autoSelectPublisher && !selectedPublisherId && publishers.length) {
            selectPublisher(publishers[0]);
        }
    });

    return (host = {
        activate(publisher) {
            const publisherId =
                typeof publisher === 'string'
                    ? publisher
                    : publisher?.id || selectedPublisherId || publishers[0] || null;

            clearTimeout(teardownTimer);
            selectPublisher(publisherId);
            view.show((host ).deactivate);

            if (!selectedPublisherId) {
                autoSelectPublisher = true;
            }
        },
        deactivate(publisher) {
            const publisherId = typeof publisher === 'string' ? publisher : publisher?.id || null;

            autoSelectPublisher = false;

            if (!publisherId || publisherId === selectedPublisherId) {
                view.softHide();
                // tear down subscriber in 15 sec
                clearTimeout(teardownTimer);
                teardownTimer = setTimeout(() => selectPublisher(), 15000);
            }
        },
    });
}

export { getHost };
//# sourceMappingURL=index.js.map
