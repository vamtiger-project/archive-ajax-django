// CSS Core Concepts
// Chapter 1:
// CSS Introduction HTML object

var Html = function () {
	this.head = new Head();

	this.body = new Body();
};

Html.prototype.setup = function () {
	this.head.setup();
	this.body.setup();
};
