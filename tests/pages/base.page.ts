import { test, expect, Locator, Page } from '@playwright/test'

class BasePage {
    page: Page
    getContainerLeftPanel: Locator

    constructor(page: Page) {
        this.page = page

        this.getContainerLeftPanel = page.locator('#leftPanel')
    }
}

export default BasePage