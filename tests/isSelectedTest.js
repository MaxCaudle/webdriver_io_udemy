beforeEach(function() {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
})

describe('Test Selected Dropdown Menus, Checkboxes & Radio Buttons', function() {
  it('Dropdown item Java is selected therefore should return true', function(done) {
    var javaSelected = browser.isSelected("option[value='java']");
    expect(javaSelected).to.equal(true);
  });
  
  it('Dropdown item maven is not selected therefore should return false', function(done) {

    var mavenSelected = browser.isSelected("option[value='maven']");
    expect(mavenSelected).to.equal(false);
  });
  
  it('Option2 is not selected therefore should return false', function(done) {
    
    var optionTwoSelected = browser.isSelected("input[value='option-2']");
    expect(optionTwoSelected).to.equal(false);
  });
  
  it('Option3 is selected therefore should return true', function(done) {
    
    var option3Selected = browser.isSelected("input[value='option-3']");
    expect(option3Selected).to.equal(true);
  });
  
  it('Radio button pumpkin is selected therefore should be true', function(done) {
    
    var pumpkingSelected = browser.isSelected("input[value='pumpkin']");
    expect(pumpkingSelected).to.equal(true);
  });
});