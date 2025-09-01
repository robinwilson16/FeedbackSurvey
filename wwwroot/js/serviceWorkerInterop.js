window.serviceWorkerInterop = {
    updateServiceWorker: function () {
        if ("serviceWorker" in navigator) {
            var appBaseURL = "/admin/";
            if (window.location.href.indexOf("localhost") > -1) {
                appBaseURL = "/";
            }

            navigator.serviceWorker.register(`${appBaseURL}service-worker.js`)
                .then((registration) => {
                    // registration worked
                    if (registration.waiting) {
                        // let waiting Service Worker know it should became active
                        registration.waiting.postMessage('SKIP_WAITING')
                    }

                    console.log("Service Worker Updated To Latest Version.");
                })
                .catch((error) => {
                    // registration failed
                    console.error(`Service Worker Update Failed With ${error}`);
                });
        }
    },
    setVersionNumber: function (versionNumber) {
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({ type: 'SET_VERSION_NUMBER', versionNumber: versionNumber });
        }
    },
    getVersionNumber: async function () {
        if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
            return new Promise((resolve, reject) => {
                const messageChannel = new MessageChannel();
                messageChannel.port1.onmessage = (event) => {
                    if (event.data && event.data.versionNumber) {
                        resolve(event.data.versionNumber);
                    } else {
                        reject('Version number not found');
                    }
                };
                navigator.serviceWorker.controller.postMessage({ type: 'GET_VERSION_NUMBER' }, [messageChannel.port2]);
            });
        } else {
            return Promise.reject('Service worker not supported or not active');
        }
    }
};