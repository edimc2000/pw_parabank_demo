import { test, expect, Locator, Page } from '@playwright/test'
import BasePage from './base.page'

class LoginPage extends BasePage {
    getFieldUserName: Locator
    getFieldPassword: Locator
    getButtonLogin: Locator
    getContainerError: Locator
    getContainerLogin: Locator


    constructor(page: Page) {
        super(page)
        this.getFieldUserName = page.locator('input[name="username"]')
        this.getFieldPassword = page.locator('input[name="password"]')
        this.getButtonLogin = page.locator('input[class="button"]')
        this.getContainerError = page.locator('.error')
        this.getContainerLogin = page.locator('#loginPanel')
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