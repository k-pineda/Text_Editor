const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);
// Define a cache name for assets
const assetCacheName = 'assets-cache';

// Define an array of file extensions for assets you want to cache
const assetFileExtensions = ['css', 'js', 'png', 'jpg', 'gif', 'svg'];

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

offlineFallback({
  route: '/index.html',
  strategy: new CacheFirst({
    cacheName: 'offline-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
});


registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
// Register a route for caching assets
registerRoute(
  ({ request }) => {
    // Check if the request's file extension matches the allowed extensions
    const url = new URL(request.url);
    return assetFileExtensions.some(ext => url.pathname.endsWith(`.${ext}`));
  },
  new CacheFirst({
    cacheName: assetCacheName,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 7 * 24 * 60 * 60, // Cache assets for 7 days
      }),
    ],
  })
);
