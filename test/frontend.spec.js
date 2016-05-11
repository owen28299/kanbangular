const Browser = require('zombie');

// We're going to make requests to http://example.com/signup
// Which will be routed to our test server localhost:3000
Browser.localhost('localhost', 3000);

describe('User visits signup page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/signup', done);
  });

  describe('submits form', function() {

    before(function(done) {
      browser
        .fill('first_name', 'Zombie')
        .fill('last_name', 'Chow')
        .fill('username', 'undying')
        .fill('password', 'tombstone')
        .fill('password2', 'tombstone')
        .pressButton('Sign Up', done);
    });

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should see welcome page', function() {
      browser.assert.text('title', 'Kanbangular');
    });
  });
});