import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.pause();
  // Go to register page.
  await page.goto('/registerForm');
  // Click input[name="username"]
  await page.locator('input[name="username"]').click();
  // Fill input[name="username"]
  await page.locator('input[name="username"]').fill('test');
  // Click input[name="name"]
  await page.locator('input[name="name"]').click();
  // Fill input[name="name"]
  await page.locator('input[name="name"]').fill('test');
  // Click input[name="password"]
  await page.locator('input[name="password"]').click();
  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill('test');
  // Click input[name="confirmPassword"]
  await page.locator('input[name="confirmPassword"]').click();
  // Fill input[name="confirmPassword"]
  await page.locator('input[name="confirmPassword"]').fill('test');
  // Click text=NovaRegisterUsernameNamePasswordConfirm Password I agree to the Terms and Conditions
  await page
    .locator(
      'text=NovaRegisterUsernameNamePasswordConfirm Password I agree to the Terms and Conditions',
    )
    .click();
  // Click button:has-text("Register")
  await page.locator('button:has-text("Register")').click();
  // Check input[name="userConsent"]
  await page.locator('input[name="userConsent"]').check();
  // Click button:has-text("Register")
  await page.locator('button:has-text("Register")').click();
  // Click text=Got it, thanks!
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/login?id=2' }*/),
    page.locator('text=Got it, thanks!').click(),
  ]);
});
