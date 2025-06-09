import { expect, data, test, dataObj } from '../fixtures/pages.fixture'

test.describe('Parabank - Login Scenarios', async () => {
    test('[TC] Login with valid credentials', async ({ loginPage }) => {
        await loginPage.logIn(dataObj.userid, dataObj.password)
    })

    test('[TC] Login with invalid credentials @smoke', async ({ loginPage }) => {
        await loginPage.logIn('invalidUSERID', 'invalidPASSWORD')
    })
})
