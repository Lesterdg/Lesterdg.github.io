'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "8725703dd77fc4f3bfc6c2ab46df8d5e",
"/": "8725703dd77fc4f3bfc6c2ab46df8d5e",
"main.dart.js": "31095f983b33b2dccd5bde0ad5f001e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/user-account.png": "66d04d36c2aff84be400fa119bbf0b6c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "245fb08f24b05659c347d74bc32bb20d",
"assets/LICENSE": "f9e38fa5da108bac2a6a3ffa37d42b08",
"assets/web/icons/user-account.png": "66d04d36c2aff84be400fa119bbf0b6c",
"assets/AssetManifest.json": "0a2f5554aeabbefdf09c2d57fdac1cb4",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
