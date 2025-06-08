import { test, expect, Locator, Page } from '@playwright/test'
import BasePage from './base.page'

export default class RegisterPage extends BasePage {
    getFieldUserName: Locator
    getFieldPassword: Locator
    getButtonLogin: Locator
    getFieldFirstName: Locator
    getFieldLastName: Locator
    getFieldAddress: Locator
    getFieldCity: Locator
    getFieldState: Locator
    getFieldZip: Locator
    getFieldPhone: Locator
    getFieldSSN: Locator
    getFieldConfirmPassword: Locator
    getFieldsToRegister: Locator
    getButtonRegister: Locator

    constructor(page: Page) {
        super(page)
        this.getFieldsToRegister = page.locator('tr input')
        this.getFieldFirstName = page.locator('tr input').nth(0)
        this.getFieldLastName = page.locator('tr input').nth(1)
        this.getFieldAddress = page.locator('tr input').nth(2)
        this.getFieldCity = page.locator('tr input').nth(3)
        this.getFieldState = page.locator('tr input').nth(4)
        this.getFieldZip = page.locator('tr input').nth(5)
        this.getFieldPhone = page.locator('tr input').nth(6)
        this.getFieldSSN = page.locator('tr input').nth(7)
        this.getFieldUserName = page.locator('tr input').nth(8)
        this.getFieldConfirmPassword = page.locator('tr input').nth(10)
        this.getButtonRegister = page.locator('[value = "Register"]')
    }

    async register(arr) {
        console.log(arr)
        for (let index = 1; index < arr.length; index++) {
            console.log(arr[index])
            await this.getFieldsToRegister.nth(index - 1).fill(arr[index])
        }
        await this.getFieldConfirmPassword.fill(arr[arr.length - 1])
        this.getButtonRegister.click()
    }


}

