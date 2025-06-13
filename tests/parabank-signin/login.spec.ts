import { expect, data, test } from '../fixtures/pages.fixture'

test.describe('Parabank - Login Scenarios @smoke', async () => {
    test('[TC] Login with valid credentials', async ({ loginPage, dataObj, registerPage }) => {
    
        let checkIfLoginRequired = await loginPage.getContainerLogin.isVisible()
        if (checkIfLoginRequired) {
            console.log('\n\nsession is expired or storage state file does not exists ')
            await loginPage.logIn(dataObj[0].userid, dataObj[0].password) // login as required 
            
            // watch for error container, if it shows up, trigger registration, the supplies userID and password was from a registered user, re register again
            let errorContainerVisible = await loginPage.getContainerError.isVisible()

            if (errorContainerVisible) {
                loginPage.page.goto(`${process.env.BASE_URL}register.htm`)
                await registerPage.register(Object.values(dataObj[0]))
                await loginPage.page.context().storageState({ path: './tests/auth/parabank.json' })
            } else {
                await loginPage.page.context().storageState({ path: './tests/auth/parabank.json' })
            }

        } else {
            console.log('session is valid')
        }
    })
})
