var ContactUs_Page = require("../pageObjects/ContactUsClass_Page.js");

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function() {
	this.timeout(20000);

	it('Should be able to submit a successful submission via contact us form', function(done) {		ContactUs_Page.setFirstName('Joe');
		ContactUs_Page.submitAllInforamtionViaContactUsForm('Joe', 'Biden','test@test.com', 'Lorem Ipsum');
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
		ContactUs_Page.setFirstName('Joe');
		ContactUs_Page.setLastName('Biden');
		ContactUs_Page.setEmail("test@test.com");
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnsuccessfulSubmission();
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
		ContactUs_Page.setFirstName('Joe');
		ContactUs_Page.setLastName('Biden');
		ContactUs_Page.setComments("Lorem ipsum");
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnsuccessfulSubmission();
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
		ContactUs_Page.setFirstName('Joe');
		ContactUs_Page.setComments("Lorem ipsum");
		ContactUs_Page.setEmail("test@test.com");
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.confirmUnsuccessfulSubmission();
	});
})