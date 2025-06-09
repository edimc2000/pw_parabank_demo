import { expect, data, test, dataObj } from '../fixtures/pages.fixture'

test.describe('Parabank - Login Scenarios', async () => {
    test('[TC] Login with valid credentials', async ({ loginPage }) => {
        await loginPage.logIn(dataObj.userid, dataObj.password)
        await loginPage.page.context().storageState({ path: './tests/auth/parabank.json' });
    })


})
