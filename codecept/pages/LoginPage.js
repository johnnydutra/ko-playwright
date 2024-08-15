const { I } = inject();

class loginPage {
  constructor() {
    //insert your locators
    // this.button = '#button'
    this.loginForm = '#login_form'
    this.username = '#user_login'
    this.password = '#user_password'
    this.submitButton = '.btn-primary'
  }
  // insert your methods here
  submitLogin(username, password) {
    I.fillField(this.username, username)
    I.fillField(this.password, password)
    I.click(this.submitButton)
  }

  assertLoginFormIsVisible() {
    I.seeElement(this.loginForm)
  }
}

// For inheritance
module.exports = new loginPage();