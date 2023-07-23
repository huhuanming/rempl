function scriptFromFile(filename, includeRempl = false) {
    let cache = null;

    // TODO: take in account settings.accept setting
    return function (settings) {
        if (!settings.dev && cache !== null) {
            return { type: 'script', value: cache };
        }

        return fetch(filename)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! File "${filename}", status: ${response.status}`);
                }

                return response.text();
            })
            .then((response) => ({
                type: 'script',
                value: (cache =
                    (includeRempl && typeof rempl === 'function'
                        ? 'var rempl = (' + rempl.toString() + ')();'
                        : '') + response),
            }));
    };
}

export { scriptFromFile };
//# sourceMappingURL=scriptFromFile.js.map
