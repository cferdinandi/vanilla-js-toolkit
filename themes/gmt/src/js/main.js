import addHeadingLinks from '../../../../../gmt-theme/dist/js/heading-links.js';
import convertkit from '../../../../../gmt-theme/dist/js/convertkit.js';
import tableOfContents from '../../../../../gmt-theme/dist/js/tableOfContents.js';
import {products, getAffiliate, setAffiliate} from '../../../../../gmt-theme/dist/js/affiliates.js';

// ConvertKit form
convertkit();

// Add table of contents
if (document.querySelector('#table-of-contents')) {
	tableOfContents('#table-of-contents', 'h2', '<h2 class="h5">On this page</h2>', null, 'ul');
}

// Anchor links on posts
if (document.body.matches('.js-anchors')) {
	addHeadingLinks('h2, h3, h4, h5, h6', '#', 'link-no-underline');
}

// Affiliate marketing
getAffiliate();
setAffiliate(products);