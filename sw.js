const CACHE='l-eng-vistoria-prof-v2-mobile';const ASSETS=['./','index.html','manifest.json','logo-l-engenharia.png','icon-192.svg','icon-512.svg'];self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
