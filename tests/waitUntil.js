beforeEach(function () {
	browser.url("/Accordion/index.html");

});

describe("Validate the loading functionality works correctly", function() {
	it("Verify relevant text LOADING COMPLETE appears after a period of time", function(done) {
		this.timeout(20000);
		
		browser.waitUntil(function() {
			return browser.getText("p#hidden-text") === "LOADING COMPLETE.";
			console.log(browser.getText("p#hidden-text"));
		}, 12000, "expected text to be different");


	});
});