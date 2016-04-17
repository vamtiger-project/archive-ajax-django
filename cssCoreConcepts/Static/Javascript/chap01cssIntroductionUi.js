// CSS Foundation
// Chapter 1:
// CSS Introduction user interface modification

UI.prototype.makeTableOfContentsAccordion = function () {
	var tableOfContents = $("#tableOfContents");
	this.createCollapsedAccordion(tableOfContents);
}

UI.prototype.makeHeadingAccordion = function () {
	var mainHeading = $("#mainHeading");
	this.createDisabledAccordion(mainHeading);
};

UI.prototype.createCollapsedAccordion = function (divElement) {	
	var accordionJson = {
		"header": "h4",
		"active": false,
		"heightStyle": "content",
		"collapsible": true,

	};
	divElement.accordion(accordionJson);
};

UI.prototype.createDisabledAccordion = function (divElement) {
	var accordionJson = {
		"header": "h1",
		"icons": false, // Remove left arrow icon
		"active": false,
		"collapsible": true,
		"disabled": true,
	};
	divElement.accordion(accordionJson);
};

UI.prototype.setup = function () {
	this.makeTableOfContentsAccordion();
	this.makeHeadingAccordion();
};
