// CSS Foundation
// Chapter 1:
// CSS Introduction Main Script

Page.prototype.setup = function () {
	html.setup();
	uI.setup();
	events.setup();
};

$(function () {
	page.setup();
});
