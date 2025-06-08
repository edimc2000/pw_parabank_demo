import { expect, data, test, dataObj } from '../fixtures/pages.fixture'

test.describe('Parabank - Register Scenarios', async () => {
    //when there is no account yet run this test case 
    test('Register', async ({ registerPage }) => {
        registerPage.register(data)
        await registerPage.page.waitForTimeout(10000)
    })
})
