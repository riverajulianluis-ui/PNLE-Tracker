const CACHE_NAME = 'pnle-tracker-v1';
const OFFLINE_URL = '/offline.html';
const PRECACHE = [
  OFFLINE_URL,
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network-first for page navigations, with an offline fallback page.
// Everything else (Supabase calls, API routes) goes straight to the network untouched,
// since progress/schedule data must always be fresh and correctly authenticated.
self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  const url = new URL(request.url);
  const isStaticAsset =
    request.destination === 'image' ||
    request.destination === 'font' ||
    url.pathname === '/manifest.json';

  if (isStaticAsset) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request))
    );
  }
});
