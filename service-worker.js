const cacheName = "coral-lite-v1"

self.addEventListener("install", event => {

event.waitUntil(

caches.open(cacheName).then(cache => {

return cache.addAll([
"/",
"/index.html",
"/style.css",
"/icon.png"
])

})

)

})


self.addEventListener("fetch", event => {

event.respondWith(

caches.match(event.request).then(response => {

return response || fetch(event.request)

})

)

})
