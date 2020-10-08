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
            var fetchRequest = event.request.clone ()
            return fetch(fetchRequest).then(
                function(response){
                    if(!response || response.status !== 200 || response.type !== 'basic'){
                        return response
                    }
                    var respondeToCache = resposta.clone()
                    caches.open(CACHE_NAME).then(
                        function(cache){
                            cache.put(event.request, responseToCache)
                        }
                    )
                    return response
                }
            )
        })
    )
})
self.addEventListener('active', function(event){
    var cacheAllowlist = ['blog-cache-v1', 'blog-cache-v2']
    event.waitUntil(
        caches.keys().then(function(cacheNames){
            return Promisse.all(
                cacheNames.map(function(cacheName){
                    if(cacheAllowlist.indexOf(cacheName) == -1){
                        return cache.delete(cacheName)
                    }
                })
            )
        })
    )
})