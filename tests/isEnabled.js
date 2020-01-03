browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");

browser.setViewportSize({
	width: 1200,
	height: 800};
	
describe('Test Enabled Dropdown Menus, Checkboxes & Radio Buttons', function() {
	it('Dropdown item orange is disabled therefore should return false', function(done) {
		var orangeEnabled = browser.isEnabled("select#fruit-selects option[value='orange']");
		expect(orangeEnabled).to.be.false;
	})

	it('Dropdown item grape is enabled therefore should return true', function(done) {
		var grapeEnabled = browser.isEnabled("select#fruit-selects option[value='grape']");
		expect(grapeEnabled).to.be.true;
	});

	it('Option2 is enabled therefore should return true', function(done) {
		var option2Enabled = browser.isEnabled("input[value='option-2']");
		expect(option2Enabled).to.be.true;
	});

	it('Radio button pumpkin is enabled therefore should return true', function(done) {
		var pumpkinEnabled = browser.isEnabled("form#radio-buttons-selected-disabled input[value='pumpkin']");
		expect(pumpkinEnabled).to.be.true;
	});

	it('Radio button cabbage is disabled therefore should return false', function(done) {
		var cabbageEnabled = browser.isEnabled("form#radio-buttons-selected-disabled input[value='cabbage']");
		expect(cabbageEnabled).to.be.false;
	});
});