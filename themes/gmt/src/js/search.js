import crowsNest from '../../../../../gmt-theme/dist/js/search.js';

crowsNest(function (article, id) {
	var html =
		'<li class="margin-bottom-medium">' +
			'<strong><a href="' + article.url + '">' + article.title + '</a></strong>' +
			'<div class="text-capitalize text-muted text-small">' + article.type.replace('page', 'reference') + '</div>' +
		'</li>';
	return html;
});