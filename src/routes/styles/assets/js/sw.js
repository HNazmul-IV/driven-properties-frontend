const PRECACHE = "precache-v1";
const RUNTIME = "runtime";

const PRECACHE_URLS = [
    "./",
    "./../css/bootstrap.css",
    "./../css/magnific-popup.css",
    "./../css/swiper.min.css",
    "./../css/perfect-scrollbar.css",
    "./../css/aos.css",
    "./../css/custom.css",
    "./jquery.slim.min.js",
    "./popper.min.js",
    "./bootstrap.min.js",
    "./swiper.min.js",
    "./jquery.inputmask.min.js",
    "./perfect-scrollbar.min.js",
    "./jquery.magnific-popup.min.js",
    "./../plugins/validation/jquery.validate.min.js",
    "./aos.js",
    "./main.js",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches
        .open(PRECACHE)
        .then((cache) => cache.addAll(PRECACHE_URLS))
        .then(self.skipWaiting())
    );
});

self.addEventListener("activate", (event) => {
    const currentCaches = [PRECACHE, RUNTIME];
    event.waitUntil(
        caches
        .keys()
        .then((cacheNames) => {
            return cacheNames.filter(
                (cacheName) => !currentCaches.includes(cacheName)
            );
        })
        .then((cachesToDelete) => {
            return Promise.all(
                cachesToDelete.map((cacheToDelete) => {
                    return caches.delete(cacheToDelete);
                })
            );
        })
        .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    // Skip cross-origin requests, like those for Google Analytics.
    if (event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return caches.open(RUNTIME).then((cache) => {
                    return fetch(event.request).then((response) => {
                        // Put a copy of the response in the runtime cache.
                        return cache.put(event.request, response.clone()).then(() => {
                            return response;
                        });
                    });
                });
            })
        );
    }
});
