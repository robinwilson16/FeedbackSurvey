/* Manifest version: X0puNN9U */
// In development, always fetch from the network and do not enable offline support.
// This is because caching would make development more difficult (changes would not
// be reflected on the first load after each change).
self.addEventListener('fetch', () => { });

self.addEventListener('message', (event) => {
    if (event.data === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    else if (event.data && event.data.type === 'GET_VERSION_NUMBER') {
        event.ports[0].postMessage({ versionNumber: self.versionNumber });
    }
    else if (event.data && event.data.type === 'SET_VERSION_NUMBER') {
        self.versionNumber = event.data.versionNumber;
    }
});

self.versionNumber = '1.0.0.0';