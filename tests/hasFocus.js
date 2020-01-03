describe('Test Radio Buttons Page', function() {
	browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");

	it('Should be able to focus on checkbox elements', function(done) {
		browser.setViewportSize({
			width: 1200,
			height: 800
		});

		browser.click('#checkboxes label:nth-of-type(1) [type]');
		var radioButtonOne = browser.hasFocus('#checkboxes label:nth-of-type(1) [type]');
		expect(radioButtonOne,'The checkbox (One) should have focus!').to.be.true;

		
		var radioButtonThree = browser.hasFocus('div#checkboxes > label:nth-of-type(3) [type]');
		expect(radioButtonThree,'The checkbox (Three) should have focus!').to.be.false;
	});
});