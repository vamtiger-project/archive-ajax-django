// CSS Foundation
// Chapter 1:
// CSS Introduction global variables

function updateTableOfContentsHtml(tableOfContentsSectionIndex, tableOfContentsSectionUrl) {
// Updates the table of contents, removing hidden HTML
	var currentTableOfContentsSubsection = $($("#tableOfContents ol")[tableOfContentsSectionIndex]);

	if (lastTableOfContentsSection != null && lastTableOfContentsSection.html() !=  currentTableOfContentsSubsection.html()){
		//lastTableOfContentsSection.html(null);
		var lastTableOfContentsSectionChild;

		lastTableOfContentsSection.children().each(function () {
			lastTableOfContentsSectionChild = $(this);
			lastTableOfContentsSectionChild.html("&nbsp;");
		});
	}

	currentTableOfContentsSubsection.load(tableOfContentsSectionUrl);

	lastTableOfContentsSection = currentTableOfContentsSubsection;
};
