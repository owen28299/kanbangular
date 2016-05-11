if(process.env.NODE_ENV !== "test"){
  console.log("please run this in NODE_ENV=test");
}

else {

  const Browser = require('zombie');

  // We're going to make requests to http://example.com/signup
  // Which will be routed to our test server localhost:3000
  Browser.localhost('localhost', 3000);

  describe('User visits signup page', function() {

    const browser = new Browser();

    before(function(done) {
      browser.visit('/signup', done);
    });

    var first_name = 'Zombie' + Math.floor(Math.random() * 1000);
    var username = 'undying' + Math.floor(Math.random() * 1000);

    describe('submits form', function() {

      before(function(done) {
        browser
          .fill('first_name', first_name)
          .fill('last_name', 'Chow')
          .fill('username', username)
          .fill('password', 'tombstone')
          .fill('password2', 'tombstone')
          .pressButton('Sign Up', done);
      });

      it('should be successful', function() {
        browser.assert.success();
      });

      it('should see the login page', function() {
        browser.assert.text('h2', 'Log In');
      });

    });

    describe('should disallow a repeated username', function() {

      before(function(done) {
        browser.visit('/signup', done);
      });

      before(function(done) {
        browser
          .fill('first_name', first_name)
          .fill('last_name', 'Chow')
          .fill('username', username)
          .fill('password', 'tombstone')
          .fill('password2', 'asdasdf')
          .pressButton('Sign Up', done);
      });

      it('should be successful', function() {
        browser.assert.success();
      });

      it('should see the sign up page', function() {
        browser.assert.text('h1', 'Sign Up');
      });
    });


    describe('should fail when passwords do not match', function() {

      before(function(done) {
        browser.visit('/signup', done);
      });

      before(function(done) {
        browser
          .fill('first_name', 'Zombie')
          .fill('last_name', 'Chow')
          .fill('username', Math.random())
          .fill('password', 'tombstone')
          .fill('password2', 'asdasdf')
          .pressButton('Sign Up', done);
      });

      it('should be successful', function() {
        browser.assert.success();
      });

      it('should see the sign up page', function() {
        browser.assert.text('h1', 'Sign Up');
      });
    });

  });

}

