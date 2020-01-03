beforeEach(function() {
	browser.url("Hidden-Elements/index.html");
})


describe('Test whether specific elements are visible within viewport', function() {

	it('should resize the current viewport', function () {
		  browser.setViewportSize({
				width: 1200,
				height: 700
			})
		});

	it('should detect if an element is visible', function () {
		var isVisibleWithinViewport = browser.isVisibleWithinViewport("#not-displayed");
		expect(isVisibleWithinViewport).to.be.false;

		var isVisibleWithinViewport = browser.isVisibleWithinViewport("#visibility-hidden");
		expect(isVisibleWithinViewport).to.be.false;

		var isVisibleWithinViewport = browser.isVisibleWithinViewport("#zero-opacity");
		expect(isVisibleWithinViewport).to.be.false;

		var isVisibleWithinViewport = browser.isVisibleWithinViewport("h1");
		expect(isVisibleWithinViewport).to.be.true;

		var width = browser.getViewportSize("width");
		var height = browser.getViewportSize("height");
		expect(width).to.equal(1200);
		expect(height).to.equal(700);
	});
});