// self.importScripts('data/games.js')

const cache_version = 'mi_cache_v1.10'
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './img/icon_v_1024.png',
  './img/favicon.png'
]

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(cache_version)
    await cache.addAll(urlsToCache)
    self.skipWaiting()
  })())
})

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keyList) => {
    return Promise.all(keyList.map((key) => {
      if (key !== cache_version) return caches.delete(key)
    }))
    .then(() => self.clients.claim())
  }))
})

self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const res = await caches.match(e.request)
    if (res) return res
    
    const response = await fetch(e.request)
    // const cache = await caches.open(cacheName);
    // cache.put(e.request, response.clone());
    return response
  })())
})