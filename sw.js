var CACHE_NAME = 'sarahhonorio-cache-v1'
var urlsToCache = [
    'css/sarahhonorio.css',
    'css/bootstrap.css',
    'js/bootstrap.js',
    'js/jquery-3.5.1.js',
    'libs/sweetalert2/src/sweetalert2.js'

]
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache){
            console.log('Cache aberto...')
            return cache.addAll(urlsToCache)
        })
    )
})

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            if(response){
                return responde
            }
            return fetch(event.request)
        })
    )
})