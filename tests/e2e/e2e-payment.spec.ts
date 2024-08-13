import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe('New Payment', () => {
  let loginPage: LoginPage
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)

    homePage.visit()
    homePage.clickOnSignIn()
    loginPage.login('username', 'password')
  })

  test('Should send new payment', async ({ page }) => {
    await page.click('#pay_bills_tab')
    await page.selectOption('#sp_payee', 'apple')
    await page.click('#sp_get_payee_details')
    await page.waitForSelector('#sp_payee_details')
    await page.selectOption('#sp_account', '6')
    await page.fill('#sp_amount', '6000')
    await page.fill('#sp_date', '2021-11-09')
    await page.fill('#sp_description', 'Some random message')
    await page.click('#pay_saved_payees')

    const message = await page.locator('#alert_content > span')
    expect(message).toBeVisible()
    expect(message).toContainText('The payment was successfully submitted')
  })
})