// CSS Foundation
// Chapter 1:
// CSS Introduction user interface modification

var UI = function () {};

UI.prototype.makeTableOfContentsAccordion = function () {
	var accordionJson = {
		"header": "h4",
		"active": false,
		"heightStyle": "content",
		"collapsible": true,

	};
	$("#tableOfContents").accordion(accordionJson);
}

UI.prototype.makeHeadingAccordion = function () {
	var accordionJson = {
		"header": "h1",
		"icons": false, // Remove left arrow icon
		"active": false,
		"collapsible": true,
		"disabled": true,
	};
	$("#mainHeading").accordion(accordionJson);
};

UI.prototype.modification = function () {
	this.makeTableOfContentsAccordion();
	this.makeHeadingAccordion();
};
