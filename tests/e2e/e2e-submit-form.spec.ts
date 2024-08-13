import { test, expect } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { FeedbackPage } from '../../page-objects/FeedbackPage'

test.describe('Feedback Form', () => {
  let homePage: HomePage
  let feedbackPage: FeedbackPage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    feedbackPage = new FeedbackPage(page)

    await homePage.visit()
    await homePage.clickOnFeedbackLink()

    await feedbackPage.fillForm('Some Name', 'email@email.com', 'Some subject', 'Some nice comment about the application')
  })

  test('Reset feedback form', async ({ page }) => {
    await feedbackPage.resetForm()
    await feedbackPage.assertReset()
  })

  test('Submit feedback form', async ({ page }) => {
    await feedbackPage.submitForm()
    await feedbackPage.feedbackFormSent()
  })
})