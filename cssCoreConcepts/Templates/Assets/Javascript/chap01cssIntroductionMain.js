// CSS Foundation
// Chapter 1:
// CSS Introduction Main Script

var Page = function () {
	this.html = new Html();
	this.uI = new UI();
	this.events = new Events();
};

Page.prototype.setup = function () {
	this.html.setup();
};

$(function () {
	var page = new Page();

	page.setup();
	page.uI.modification();
	page.events.setup();
});
