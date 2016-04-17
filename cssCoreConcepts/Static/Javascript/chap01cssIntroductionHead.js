// CSS Foundation
// Chapter 1:
// CSS Introduction head HTML object

Head.prototype.setMetaTag = function () {
	var metaTag = this.getMetaTag();
	var firstScript = $("script")[0];

	metaTag.insertBefore(firstScript);
};

Head.prototype.getMetaTag = function () {
	var metaTagAttributes = {
		"charset": "UTF-8",
	};
	var metaTag = $("<meta />", metaTagAttributes);

	return metaTag;
};

Head.prototype.setTitleTag = function () {
	var titleTag = this.getTitleTag();
	var firstScript = $("script")[0];

	titleTag.insertBefore(firstScript);
};

Head.prototype.getTitleTag = function () {
	var titleTag = $("<title />");
	var titleTagText = "CSS Foundation";

	titleTag.text(titleTagText);

	return titleTag;
};

Head.prototype.setExternalCss = function () {
	var externalCssLinks = this.getExternalCssLinks();
	var firstScript = $("script")[0];

	$("head").append(externalCssLinks);
};

Head.prototype.getExternalCssLinks = function () {
	var linkTag;
	var linkTagAttributes = {
		"rel": "stylesheet",
	};
	var externalCssLinkPaths = [
		"/Static/Assets/Css/jquery-ui.css",
		"/Static/Assets/Css/main.css",
	];
	var externalCssLinks = [];
	var externalCssLink;
	var index;

	for (index in externalCssLinkPaths) {
		externalCssLinkPath = externalCssLinkPaths[index];
		linkTagAttributes.href = externalCssLinkPath;

		linkTag = $("<link />", linkTagAttributes);
		externalCssLinks[index] = linkTag;
	}

	return externalCssLinks;
};

Head.prototype.setup = function () {
	this.setMetaTag();
	this.setTitleTag();
	this.setExternalCss();
};
