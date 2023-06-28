const CACHE_NAME = "version-1";
const urlsToCache = [ 'index.html', 'offline.html' ];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request) 
                    .catch(() => caches.match('../src/screens/Launch.js'))
            })
    )
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const expectedCaches = [];
    expectedCaches.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then(keys => Promise.all(
          keys.map(key => {
                if (!expectedCaches.includes(key)) {
          return caches.delete(key);
        }
            })
          )).then(() => {
            console.log('V1 now ready to handle fetches!');
          })
        );
      });