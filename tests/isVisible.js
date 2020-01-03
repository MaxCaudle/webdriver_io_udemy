beforeEach(function() {
  browser.url("/Hidden-Elements/index.html");
})

describe('Test whether hidden elements exist', function() {
  it('Button display is set to non display in html dom therefore should return false', function(done) {
    var isVisible = browser.isVisible('#not-displayed');
    expect(isVisible).to.equal(false);
  });

  it('Button display is set to visibility hidden in html dom therefore should return false', function(done) {
    var isVisible = browser.isVisible('#visibility-hidden');
    expect(isVisible).to.equal(false);
  });

  it('Button display is set to zero opacity in html dom therefore should return false', function(done) {
    var isVisible = browser.isVisible('#zero-opacity');
    expect(isVisible).to.equal(false);
  });

  it('Header text is visible and exists in the html dom therefore should return true', function(done) {    
    var isVisible = browser.isVisible('h1');
    expect(isVisible).to.equal(true);
  });

});