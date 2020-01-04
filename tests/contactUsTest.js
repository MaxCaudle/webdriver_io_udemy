var ContactUs_Page = require("../pageObjects/ContactUsClass_Page.js");

beforeEach(async() => {
	await browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', () => {

	it.skip('Should be able to submit a successful submission via contact us form', () => {ContactUs_Page.setFirstName('Joe');
		ContactUs_Page.submitAllInforamtionViaContactUsForm('Joe', 'Biden','test@test.com', 'Lorem Ipsum');
		ContactUs_Page.successfulSubmissionSelector.waitForDisplayed(3000);

		try {
			expect(ContactUs_Page.successfulSubmissionSelectorText).to.equal('Thank You for your Message!');
		} catch(err) {
			console.log("Exception: " + err);
			assert.fail();
		}
		
	});

	it.skip('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
		ContactUs_Page.setFirstName('Joe');
		ContactUs_Page.setComments("Lorem ipsum");
		ContactUs_Page.setEmail("test@test.com");
		ContactUs_Page.clickSubmitButton();
		try {
		expect(ContactUs_Page.unsuccessfulSubmissionSelectorText).to.have('Error: a fields are required');
	} catch(err) {
		console.log("Exception: " + err);
		assert.fail();
	}
	});


})