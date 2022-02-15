import crowsNest from '../../../../../gmt-theme/dist/js/search.js';

crowsNest(function (article, id) {
	if (!article.title || article.url.contains('/offline/')) return '';
	return `
		<li class="margin-bottom-medium">
			<div class="text-capitalize text-muted text-small">${article.type.replace('page', 'reference')}</div>
			<div><strong><a class="link-no-underline" href="${article.url}">${article.title}</a></strong></div>
		</li>`;
});