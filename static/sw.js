importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/120d80877b4fbd39d601.js",
    "revision": "4f48f7d936b3d1047ceb5b94d63e27fb"
  },
  {
    "url": "/_nuxt/404aba0d5d2a24e898a9.js",
    "revision": "c80dda1a4a44f60ceee6e78e4068b15a"
  },
  {
    "url": "/_nuxt/50dbf683d2f9ec8bf5fb.js",
    "revision": "949e49c9acc46632de0fd1d2f1955dbe"
  },
  {
    "url": "/_nuxt/c2e4a5cd058e18a45f4e.js",
    "revision": "0e3732a833b33a4f153d038bce431f8f"
  },
  {
    "url": "/_nuxt/d4610ae90ab15c290b8c.js",
    "revision": "aef46e07b5196a371f1826cb65cca4f7"
  },
  {
    "url": "/_nuxt/dcb6240551d8f436aa5c.js",
    "revision": "99991327c65a234ef5f72922f7f37891"
  },
  {
    "url": "/_nuxt/e0bbd28310861188cd4a.js",
    "revision": "f7ceb30b8f2ae5c026400189b5452ee5"
  },
  {
    "url": "/_nuxt/e47dbdf1891aeed4a803.js",
    "revision": "05df7611aab02bc0fe4026140273cf06"
  }
], {
  "cacheId": "smartmi",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
