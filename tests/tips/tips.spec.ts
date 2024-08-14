import { test, expect } from '@playwright/test'

test.describe('Tips & Tricks Section', () => {
  test('TestInfo Object', async ({ page }, testInfo) => {
    await page.goto('https://www.example.com')
    console.log(testInfo)
  })

  test('Test Skip Browser', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'Feature not ready in Chrome browser')
    await page.goto('https://www.example.com')
  })

  test('Test Fixme Annotation', async ({ page, browserName }) => {
    test.fixme(browserName === 'chromium', 'Test is not stable, needs revision')
    await page.goto('https://www.example.com')
  })
})