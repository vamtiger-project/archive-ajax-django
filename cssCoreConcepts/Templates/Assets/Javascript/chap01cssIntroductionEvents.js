// CSS Foundation
// Chapter 1:
// CSS Introduction events

var Events = function () {};

Events.prototype.tableOfContents = function () {
	var events = this;
	var sectionHeader;
	var sectionHeaderText;
	var introductionRegex = /Introduction/;
	var stylingElementsRegex = /Styling Elements/;
	var clashingRegex = /Clashing/;
	var stylingTextRegex = /Styling Text/;
	var stylingBlocksRegex = /Styling Blocks/;
	var colorRegex = /Color/;

	$("#tableOfContents h4").each(function () {
		sectionHeader = $(this);
		sectionHeaderText = sectionHeader.text();
		
		if (sectionHeaderText.match(introductionRegex)) {
			sectionHeader.click(events.introClicked);
		} else if (sectionHeaderText.match(stylingElementsRegex)) {
			sectionHeader.click(events.stylingElementsClicked);
		} else if (sectionHeaderText.match(clashingRegex)) {
			sectionHeader.click(events.clashingClicked);
		} else if (sectionHeaderText.match(stylingTextRegex)) {
			sectionHeader.click(events.stylingTextClicked);
		} else if (sectionHeaderText.match(stylingBlocksRegex)) {
			sectionHeader.click(events.stylingBlocksClicked);
		} else if (sectionHeaderText.match(colorRegex)) {
			sectionHeader.click(events.colorClicked);
		}
	});
};

Events.prototype.introClicked = function () {
	var tableOfContentsSectionIndex = 0;
	var tableOfContentsSectionUrl = "/Static/Assets/Data/Html/tableOfContentsIntroduction.html";

	updateTableOfContentsHtml(tableOfContentsSectionIndex, tableOfContentsSectionUrl);
};

Events.prototype.stylingElementsClicked = function () {
	var tableOfContentsSectionIndex = 1;
	var tableOfContentsSectionUrl = "/Static/Assets/Data/Html/tableOfContentsStylingElements.html";

	updateTableOfContentsHtml(tableOfContentsSectionIndex, tableOfContentsSectionUrl);
};

Events.prototype.clashingClicked = function () {
	var tableOfContentsSectionIndex = 2;
	var tableOfContentsSectionUrl = "/Static/Assets/Data/Html/tableOfContentsClashing.html";

	updateTableOfContentsHtml(tableOfContentsSectionIndex, tableOfContentsSectionUrl);
};

Events.prototype.stylingTextClicked = function () {
	var tableOfContentsSectionIndex = 3;
	var tableOfContentsSectionUrl = "/Static/Assets/Data/Html/tableOfContentsStylingText.html";

	updateTableOfContentsHtml(tableOfContentsSectionIndex, tableOfContentsSectionUrl);
};

Events.prototype.stylingBlocksClicked = function () {
	var tableOfContentsSectionIndex = 4;
	var tableOfContentsSectionUrl = "/Static/Assets/Data/Html/tableOfContentsStylingBlocks.html";

	updateTableOfContentsHtml(tableOfContentsSectionIndex, tableOfContentsSectionUrl);
};

Events.prototype.colorClicked = function () {
	var tableOfContentsSectionIndex = 5;
	var tableOfContentsSectionUrl = "/Static/Assets/Data/Html/tableOfContentsColor.html";

	updateTableOfContentsHtml(tableOfContentsSectionIndex, tableOfContentsSectionUrl);
};

Events.prototype.setup = function () {
	var events = new Events();
	
	events.introClicked();
	events.tableOfContents();
};
