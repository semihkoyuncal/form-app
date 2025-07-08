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

  test('Dil seçici ile İngilizceye geçiş ve metin kontrolü', async ({ page }) => {
    await page.goto('/');
    // İngilizceyi seç
    await page.selectOption('select', 'en');
    // Etiketlerin İngilizce olduğunu kontrol et
    await expect(page.locator('label[for="firstName"]')).toHaveText('First Name:');
    await expect(page.locator('label[for="lastName"]')).toHaveText('Last Name:');
    await expect(page.locator('label[for="email"]')).toHaveText('Email:');
    await expect(page.locator('label[for="dob"]')).toHaveText('Date of Birth:');
    await expect(page.locator('button[type="submit"]')).toHaveText('Submit');
    // Formu doldur ve gönder
    await page.fill('#firstName', 'John');
    await page.fill('#lastName', 'Doe');
    await page.fill('#email', 'john.doe@example.com');
    await page.fill('#dob', '1990-01-01');
    await page.click('button[type="submit"]');
    await expect(page.locator('.success-msg')).toHaveText('Form submitted successfully!');
  });

  test('Dil seçici ile tekrar Türkçeye geçiş ve metin kontrolü', async ({ page }) => {
    await page.goto('/');
    // Önce İngilizceye, sonra tekrar Türkçeye geç
    await page.selectOption('select', 'en');
    await page.selectOption('select', 'tr');
    // Etiketlerin tekrar Türkçe olduğunu kontrol et
    await expect(page.locator('label[for="firstName"]')).toHaveText('Ad:');
    await expect(page.locator('label[for="lastName"]')).toHaveText('Soyad:');
    await expect(page.locator('label[for="email"]')).toHaveText('E-posta:');
    await expect(page.locator('label[for="dob"]')).toHaveText('Doğum Tarihi:');
    await expect(page.locator('button[type="submit"]')).toHaveText('Gönder');
  });
}); 