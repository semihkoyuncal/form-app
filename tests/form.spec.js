const { test, expect } = require('@playwright/test');

test.describe('Form Uygulaması', () => {
  test('Formu otomatik doldurup gönderir', async ({ page }) => {
    await page.goto('/');
    await page.fill('#firstName', 'Semih');
    await page.fill('#lastName', 'Koyunçal');
    await page.fill('#email', 'dummy123@example.com');
    await page.fill('#dob', '2003-05-17');
    await page.click('button[type="submit"]');
    await expect(page.locator('.success-msg')).toHaveText('Form başarıyla gönderildi!');
  });
}); 