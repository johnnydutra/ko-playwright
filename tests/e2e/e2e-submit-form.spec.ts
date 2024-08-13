import { test, expect } from '@playwright/test'

test.describe('Feedback Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
    await page.click('#feedback')

    await page.fill('#name', 'Some Name')
    await page.fill('#email', 'email@email.com')
    await page.fill('#subject', 'Some subject')
    await page.fill('#comment', 'Some nice comment about the application')
  })

  test('Reset feedback form', async ({ page }) => {
    await page.click('input[name="clear"]')

    const nameInput = await page.locator('#name')
    const commentInput = await page.locator('#comment')

    await expect(nameInput).toBeEmpty()
    await expect(commentInput).toBeEmpty()
  })

  test('Submit feedback form', async ({ page }) => {
    await page.click('input[type="submit"]')

    await page.waitForSelector('#feedback-title')
  })
})