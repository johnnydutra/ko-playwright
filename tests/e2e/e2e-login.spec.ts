import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.parallel('Login / Logout Flow', () => {
  let loginPage: LoginPage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)

    await loginPage.visit()
    await page.click('#signin_button')
  }) 
  
  test('Negative scenario for login', async ({ page }) => {
    loginPage.login('invalid username', 'invalid password')
    loginPage.assertErrorMessage()
  })

  test('Positive scenario for login and logout', async ({ page }) => {
    loginPage.login('username', 'password')

    const accountSummaryTab = await page.locator('#account_summary_tab')
    await expect(accountSummaryTab).toBeVisible()

    await page.goto('http://zero.webappsecurity.com/logout.html')
    await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
  })
})