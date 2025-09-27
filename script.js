self.addEventListener('install', event => {
  console.log('SW install');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('SW activate');
});

self.addEventListener('fetch', event => {
  // simple fetch passthrough - ini cukup agar service worker terdaftar
  event.respondWith(fetch(event.request));
});