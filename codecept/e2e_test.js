Feature('Zero Bank Application - E2E Tests')

Scenario('Login Test - Negative', ({ I }) => {
  I.amOnPage('http://zero.webappsecurity.com/index.html')
  I.click('#signin_button')
  I.seeElement('#login_form')
  I.fillField('#user_login', 'invalid username')
  I.fillField('#user_password', 'invalid password')
  I.click('.btn-primary')
  I.seeElement('.alert-error')
})