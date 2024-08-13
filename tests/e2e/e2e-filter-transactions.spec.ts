import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe('Filter Transactions', () => {
  let loginPage: LoginPage
  let homePage: HomePage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)

    homePage.visit()
    homePage.clickOnSignIn()
    loginPage.login('username', 'password')
  })

  test('Verify the results for each account', async ({ page }) => {
    await page.click('#account_activity_tab')
    await page.selectOption('#aa_aacountId', '2')
    const checkingAccount = await page.locator('#all_transactions_for_account tbody tr')
    await expect(checkingAccount).toHaveCount(3)

    await page.selectOption('#aa_aacountId', '4')
    const loadAccount = await page.locator('#all_transactions_for_account tbody tr')
    await expect(checkingAccount).toHaveCount(2)
  
    await page.selectOption('#aa_aacountId', '4')
    const noResults = await page.locator('.well')
    await expect(noResults).toBeVisible()
  })
})