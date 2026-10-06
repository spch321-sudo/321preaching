var VERSION = 'preach321-2.1.7';
var SHELL = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png', 'p321-icon-192.png', 'p321-icon-512.png', 'p321-maskable-512.png', 'p321-touch-180.png', 'hero.jpg', 'p321-hero.jpg', 'lang-zs.json', 'lang-en.json', 'media.js', 'kit.js'];
self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(VERSION).then(function (c) {
    return Promise.all(SHELL.map(function (u) { return c.add(u).catch(function () { }); }));
  }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('message', function (e) { if (e.data === 'skip') self.skipWaiting(); });
self.addEventListener('fetch', function (e) {
  var req = e.request, u = new URL(req.url);
  if (req.method !== 'GET' || u.origin !== location.origin) return;
  if (/version\.json$/.test(u.pathname)) return;
  if (/\/music\//.test(u.pathname) || /\.(mp3|m4a|wav)$/.test(u.pathname)) return;
  var key = req.mode === 'navigate' ? 'index.html' : u.pathname.replace(/^.*\//, '') || 'index.html';
  e.respondWith(fetch(req).then(function (r) {
    if (r && r.ok) { var cp = r.clone(); caches.open(VERSION).then(function (c) { c.put(key, cp); }); }
    return r;
  }).catch(function () { return caches.match(key).then(function (m) { return m || caches.match(req, { ignoreSearch: true }); }); }));
});
