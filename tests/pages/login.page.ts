import { test, expect, Locator, Page } from '@playwright/test'
import BasePage from './base.page'

class LoginPage extends BasePage {
    getFieldUserName: Locator
    getFieldPassword: Locator
    getButtonLogin: Locator

    constructor(page: Page) {
        super(page)
        this.getFieldUserName = page.locator('input[name="username"]')
        this.getFieldPassword = page.locator('input[name="password"]')
        this.getButtonLogin = page.locator('input[class="button"]')
    }

    async clickButtonLogin() {
        await this.getButtonLogin.click()
    }

    async logIn(userId: string, password: string) {
        await this.getFieldUserName.fill(userId)
        await this.getFieldPassword.fill(password)
        await this.clickButtonLogin()
    }
}

export default LoginPage