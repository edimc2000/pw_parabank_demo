import { test, expect, Locator, Page } from '@playwright/test'
import BasePage from './base.page'
import { link } from 'fs'

class MainPage extends BasePage {
    getContainerWelcomeMessage: Locator
    getOpenNewAccount: Locator
    getButtonOpenNewAccount: Locator
    getDropdownAccounts: Locator
    getDropdownAccountType: Locator

    constructor(page: Page) {
        super(page)

        this.getContainerWelcomeMessage = page.locator('.smallText')

        // open new account 
        this.getOpenNewAccount = page.getByRole('link', { name: 'Open New Account' })
        this.getButtonOpenNewAccount = page.getByRole('button', { name: 'OPEN NEW ACCOUNT' })
        this.getDropdownAccountType = page.locator('#type')
        this.getDropdownAccounts = page.locator('#fromAccountId')

        // accounts overview
    }

    async clickMenuItem(str: string) {
        await this.page.getByRole('link', { name: `${str}` }).click()
    }
}

export default MainPage