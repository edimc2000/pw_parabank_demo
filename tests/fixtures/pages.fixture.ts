import { test as base, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'
import 'dotenv/config'
import RegisterPage from '../pages/register.page'
import LoginPage from '../pages/login.page'
import BasePage from '../pages/base.page'



// Declare type for fixtures and other variables 
type sampleData = {
    's/n': number
    fname: string
    lname: number
    address: string
    city: number
    state: string
    zip: string
    phone: string
    ssn: string
    userid: string
    password: string
}

type FixtureForPages = {
    basePage: BasePage
    registerPage: RegisterPage
    loginPage: LoginPage
    dataObj: sampleData[]
}

// sample test data 
const csvFile: string = `${path.join(__dirname, '..', 'data/registerdata.csv')}`
const registerDataSample: sampleData[] = parse(fs.readFileSync(csvFile), {
    columns: true,
    skip_empty_lines: true
});
const data = Object.values(registerDataSample[0])
const dataObj0 = registerDataSample[0]



// actual fixture to use for test 
const test = base.extend<FixtureForPages>({
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page)
        await page.goto(`${process.env.BASE_URL}`)
        await use(basePage)
    },

    registerPage: async ({ basePage }, use) => {
        const registerPage = new RegisterPage(basePage.page)
        // await basePage.page.goto(`${process.env.BASE_URL}register.htm`)
        await use(registerPage)
    },

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await page.goto(`${process.env.BASE_URL}`)
        await use(loginPage)
    },

    dataObj: async ({ }, use) => {
        const dataObj: sampleData[] = registerDataSample


        await use(dataObj)
    }


})

export { test, expect, data, fs, path }