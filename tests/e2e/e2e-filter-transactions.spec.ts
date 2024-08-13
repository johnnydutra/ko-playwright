import { test, expect } from '@playwright/test'

test.describe('Filter Transactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#signin_button')
    await page.fill('#user_login', 'username')
    await page.fill('#user_password', 'password')
    await page.click('text=Sign in')
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