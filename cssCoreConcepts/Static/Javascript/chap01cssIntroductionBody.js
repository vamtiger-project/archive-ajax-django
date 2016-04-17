// CSS Foundation
// Chapter 1:
// CSS Introduction body HTML object

Body.prototype.variables = function () {
	this.lastTableOfContentsSection;
}

Body.prototype.getHtmlJson = function () {
	var htmlJson = {
		"mainHeading": this.getMainHeading(),
		"tableOfContents": this.getTableOfContents(),
};

	return htmlJson;
};

Body.prototype.getMainHeading = function () {
	var mainHeading = $("<h1 />");
	var mainHeadingText = $("title").text();
	var mainHeadingDivAttributes = {
		"id": "mainHeading",
	};
	var mainHeadingDiv = $("<div />", mainHeadingDivAttributes);

	mainHeading.text(mainHeadingText);

	mainHeadingDiv.html(mainHeading);
	return mainHeadingDiv;
};

Body.prototype.getHtmlList = function () {
	var htmlJson = this.getHtmlJson();
	var htmlList = [
		htmlJson.tableOfContents,
		htmlJson.mainHeading,
	];

	return htmlList;
};

Body.prototype.getTableOfContents = function () {
	var tableOfContentsAttributes = {
		"id": "tableOfContents",
	};
	var tableOfContents = $("<div />", tableOfContentsAttributes);

	this.appendTableOfContentsSection("Introduction", 8, tableOfContents); // 0
	this.appendTableOfContentsSection("Styling Elements", 18, tableOfContents); // 1
	this.appendTableOfContentsSection("Clashing", 8, tableOfContents);	// 2
	this.appendTableOfContentsSection("Styling Text", 16, tableOfContents);	// 3
	this.appendTableOfContentsSection("Styling Blocks", 14, tableOfContents);	// 4
	this.appendTableOfContentsSection("Color", 10, tableOfContents);	// 5

	return tableOfContents;
};

Body.prototype.appendTableOfContentsSection = function (sectionTitle, subsections, tableOfContents) {
	var heading = $("<h4 />");
	var sectionList = $("<ol />");
	var sectionListItem;
	var index;

	heading.text(sectionTitle);

 	for (index = 0; index < subsections; index ++) {
 		sectionListItem = $("<li />");
		sectionListItem.text("&nbsp;");
 		sectionList.append(sectionListItem);
 	}

	tableOfContents.append(heading);
	tableOfContents.append(sectionList);
};

Body.prototype.updateTableOfContents = function(tableOfContentsSectionIndex, tableOfContentsSectionUrl) {
	var currentTableOfContentsSubsection = $($("#tableOfContents ol")[tableOfContentsSectionIndex]);
	
	this.updateTableOfContentsHtml(currentTableOfContentsSubsection, tableOfContentsSectionUrl);
	this.setActiveTableOfContentsSectionHeading(currentTableOfContentsSubsection);
};

Body.prototype.updateTableOfContentsHtml = function (currentTableOfContentsSubsection, tableOfContentsSectionUrl) {
	if (this.lastTableOfContentsSection != null && this.lastTableOfContentsSection.html() !=  currentTableOfContentsSubsection.html()){
		var lastTableOfContentsSectionChild;

		this.lastTableOfContentsSection.children().each(function () {
			lastTableOfContentsSectionChild = $(this);
			lastTableOfContentsSectionChild.html("&nbsp;");
		});
	}

	currentTableOfContentsSubsection.load(tableOfContentsSectionUrl);

	this.lastTableOfContentsSection = currentTableOfContentsSubsection;
};

Body.prototype.setActiveTableOfContentsSectionHeading = function (currentTableOfContentsSubsection) {
	var activeTableOfContentsSectionHeader = currentTableOfContentsSubsection.prev();
	var activeTableOfContentsSectionMainHeading = $("#activeTableOfContentsSectionMainHeading");

	if (activeTableOfContentsSectionMainHeading.length == 0) {
		activeTableOfContentsSectionMainHeading = $("#mainHeading").clone();
		activeTableOfContentsSectionMainHeading.attr("id", "activeTableOfContentsSectionMainHeading");

		$("body").append(activeTableOfContentsSectionMainHeading);
	}

	if ($("#activeTableOfContentsSectionMainHeading h1").text() != activeTableOfContentsSectionHeader.text()) {
		$("#activeTableOfContentsSectionMainHeading h1").text(activeTableOfContentsSectionHeader.text());
	}
};

Body.prototype.setup = function () {
	var htmlList = this.getHtmlList();
	var index;
	var currentElement;

	for (index in htmlList) {
		currentElement = htmlList[index];

		$("body").append(currentElement);
	}
};
