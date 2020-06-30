
self.addEventListener('install', (event) => {
    console.log("service worker has been installed")
} )

self.addEventListener('activate', (event) => {
    console.log("service worker activated")
    return self.clients.claim();
} )

self.addEventListener('fetch', (event) => {
    // console.log('[Service worker fetching ....')
} )
