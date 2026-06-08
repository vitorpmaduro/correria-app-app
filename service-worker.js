const CACHE_NAME = "correria-v1";

// Atualizado para refletir o nome real do seu arquivo HTML e do Manifesto
const FILES = [
  "./",
  "./correria.html",
  "./manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});