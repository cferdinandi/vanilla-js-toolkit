/*! GMT Service Worker v2.0.1 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/gmt-theme */

var version = 'gmt_2.0.1';
var coreID = version + '_core';
var pageID = version + '_pages';
var imgID = version + '_img';
var cacheIDs = [coreID, pageID, imgID];
var limits = {
	pages: 30,
	imgs: 10
};


//
// Methods
//

/**
 * Remove cached items over a certain number
 * @param  {String}  key The cache key
 * @param  {Integer} max The max number of items allowed
 */
var trimCache = function (key, max) {
	caches.open(key).then(function (cache) {
		return cache.keys();
	}).then(function (keys) {
		if (keys.length > max) {
			cache.delete(keys[0]).then(function () {
				trimCache(key, max);
			});
		}
	});
};

//
// Event Listeners
//

// On install, cache some stuff
addEventListener('install', function (event) {
	event.waitUntil(caches.open(coreID).then(function (cache) {
		cache.add('/offline/');
		cache.add('/img/favicon.ico');
	}));
});

// On version update, remove old cached files
addEventListener('activate', function (event) {
	event.waitUntil(caches.keys().then(function (keys) {
		return Promise.all(keys.filter(function (key) {
			return !cacheIDs.includes(key);
		}).map(function (key) {
			return caches.delete(key);
		}));
	}).then(function () {
		return clients.claim();
	}));
});

// listen for requests
addEventListener('fetch', function (event) {

	// Get the request
	var request = event.request;

	// Bug fix
	// https://stackoverflow.com/a/49719964
	if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;

	// Ignore non-GET requests
	if (request.method !== 'GET') return;

	// HTML files
	// Network-first
	if (request.headers.get('Accept').includes('text/html')) {
		event.respondWith(
			fetch(request).then(function (response) {
				if (response.type !== 'opaque') {
					var copy = response.clone();
					event.waitUntil(caches.open(pageID).then(function (cache) {
						return cache.put(request, copy);
					}));
				}
				return response;
			}).catch(function (error) {
				return caches.match(request).then(function (response) {
					return response || caches.match('/offline/');
				});
			})
		);
		return;
	}

	// Other assets
	// Offline-first
	event.respondWith(
		caches.match(request).then(function (response) {
			return response || fetch(request).then(function (response) {

				// If the request is for an image, stash a copy of this image in the images cache
				if (request.headers.get('Accept').includes('image')) {
					var copy = response.clone();
					event.waitUntil(caches.open(imgID).then(function (cache) {
						return cache.put(request, copy);
					}));
				}

				// Return the requested file
				return response;

			});
		})
	);

});

// Trim caches over a certain size
addEventListener('message', function (event) {
	if (event.data !== 'cleanUp') return;
	trimCache(pageID, limits.pages);
	trimCache(imgID, limits.imgs);
});
