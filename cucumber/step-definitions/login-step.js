const { Given, When, Then, defineStep } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given('I visit a login page', async function () {
  loginPage.navigateToLoginScreen()
})

When('I fill the login form with valid credentials', async function () {
  loginPage.submitLoginForm()
})

Then('I should see the home page', async function() {
  loginPage.assertUserIsLoggedIn()
})

defineStep('I wait for 3 seconds', async function() {
  await loginPage.pause()
})

defineStep(/^I fill the login form with "([^"]*)" and "([^"]*)"$/, async function (username, password) {
  await loginPage.submitLoginFormWithParameters(username, password)
})