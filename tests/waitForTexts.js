beforeEach(function () {
	browser.url("/Accordion/index.html");

});

describe("Verify that the correct text appears on the Accordion Page", function() {
	it('Verify lodaing completetext is visible after a set duration of time', function() {
		this.timeout(20000);
		var elem = $("p#hidden-text");
		console.log("Current Text" + elem.getText());
		elem.waitForText(1000);
		console.log("while loop");
		while (elem.getText() != 'LOADING COMPLETE.') {
			browser.pause(1000);
		}
		console.log(elem.getText());

	});

});