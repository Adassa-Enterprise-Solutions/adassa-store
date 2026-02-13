const CACHE = 'as-cache-v1';
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/assets/css/font-awesome.min.css',
    '/assets/css/global.css',
    '/assets/css/responsive.css',
    '/assets/css/style.css',
    '/assets/css/utility.css',
    '/assets/js/main.js',
    '/assets/js/lunr.js',
    '/assets/manifest.json',
    '/assets/media/logo.png',
    '/assets/icons/icon-192.png',
    '/assets/icons/icon-512.png'
];

const urlsToCache = [
  "/",
  "/assets/css/style.css"
];

self.addEventListener('install', event => {
    event.waitUntil(
            caches.open(CACHE).then(cache => cache.addAll(FILES_TO_CACHE))
            );
});

self.addEventListener('fetch', event => {
    event.respondWith(
            caches.match(event.request).then(response => response || fetch(event.request))
            );
});