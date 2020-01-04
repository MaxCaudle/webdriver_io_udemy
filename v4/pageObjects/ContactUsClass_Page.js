class ContactUs_Page {
	get firstName() {return $("[name='first_name']");}
	get lastName() {return $("[name='last_name']");}
	get comments() {return $("[name='message']");}
	get email() {return $("[name='email']")};
	get submitButton() {return $("[type='submit']")};

	get successfulSubmissionSelector() {return $("#contact_reply h1")};
	get unsuccessfulSubmissionSelector() {return $('body')};

	get successfulSubmissionSelectorText() {
		return this.successfulSubmissionSelector.getText();
	};
	get unsuccessfulSubmissionSelectorText() {
		return this.unsuccessfulSubmissionSelector.getText();
	};

	setFirstName(firstName) {
		return this.firstName.setValue(firstName);
	};

	setLastName(lastName) {
		return this.lastName.setValue(lastName);
	};

	setEmail(email) {
		return this.email.setValue(email);
	};

	setComments(comments) {
		return this.comments.setValue(comments);
	};

	clickSubmitButton() {
		return this.submitButton.click();
	};

	submitAllInforamtionViaContactUsForm(firstName, lastName, email, comments) {
		if(firstName) {
			this.firstName.setValue(firstName);
		}
		if(lastName) {
			this.lastName.setValue(lastName);
		}
		if(email) {
			this.email.setValue(email);
		}
		if(comments) {
			this.comments.setValue(comments);
		}
		this.submitButton.click();


	};
}



module.exports = new ContactUs_Page();