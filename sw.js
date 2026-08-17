const CACHE_NAME = 'clock-cache-v2';
const urlsToCache = [
  './index.html',
  './index4_Rob.html',
  './manifest.json',
  './manifest-rob.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  // Try network first for weather API, otherwise return cache
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});