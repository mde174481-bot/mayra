const C = "mayra-v5";
self.addEventListener("install", (e) => { e.waitUntil(caches.open(C).then((c) => c.addAll(["./", "./index.html", "./manifest.json", "./icon.svg"]))); self.skipWaiting(); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== C).map((k) => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", (e) => { if (e.request.method === "GET") e.respondWith(fetch(e.request).catch(() => caches.match(e.request))); });
