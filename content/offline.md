---
title: "You're offline"
date: 2018-01-11T16:03:33-05:00
draft: false
---

It looks like you're not online right now.

Don't worry! You can still access some of the pages you looked at before going&nbsp;offline.

<div data-offline></div>

<script>
	(function () {
		if (!navigator || !navigator.serviceWorker) return;
		caches.keys().then(function (keys) {
			return keys.filter(function (key) {
				return key.includes('_pages');
			}).forEach(function (key) {
				caches.open(key).then(function (cache) {
					cache.keys().then(function (keys) {
						var offline = document.querySelector('[data-offline]');
						offline.innerHTML =
							'<ul>' +
								keys.map(function(key) {
									if (!key.url.endsWith('/')) return '';
									return '<li><a href="' + key.url + '">' + key.url + '</a></li>';
								}).join('') +
							'</ul>';
					});
				});
			});
		});
	})();
</script>