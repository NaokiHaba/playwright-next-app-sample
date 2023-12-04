import { expect, test } from '@playwright/test';

// テストコードの実行前にTOPページにアクセスする
test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:3000');
});

test('Get started by editing src/app/page.tsx が表示される', async ({page}) => {
    await expect(page.getByRole('main')).toContainText('Get started by editing src/app/page.tsx');
})

test('Docページに遷移できる', async ({page}) => {
    const page7Promise = page.waitForEvent('popup');
    await page.getByRole('link', {name: 'Docs -> Find in-depth'}).click();
    const page7 = await page7Promise;
    await expect(page7.getByRole('heading', {name: 'Introduction'})).toBeVisible();
})