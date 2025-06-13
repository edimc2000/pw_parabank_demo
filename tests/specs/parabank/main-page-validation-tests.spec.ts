import { expect, data, test, path } from '../../fixtures/pages.fixture'


test.describe('Parabank - Main Page', async () => {

  test('[TC01] Validate main page snapshot and screenshot after logging in', async ({ mainPage, dataObj }, testInfo) => {
    await expect(mainPage.getContainerLeftPanel).toBeAttached()
    await expect(mainPage.getContainerWelcomeMessage).toHaveText(`Welcome ${dataObj[0].fname} ${dataObj[0].lname} `)
    // golden snapshot taken 0608
    await expect(mainPage.page.locator('body')).toMatchAriaSnapshot(`
    - link:
      - /url: admin.htm
      - img
    - link "ParaBank":
      - /url: index.htm
      - img "ParaBank"
    - paragraph: Experience the difference
    - list:
      - listitem: Solutions
      - listitem:
        - link "About Us":
          - /url: about.htm
      - listitem:
        - link "Services":
          - /url: services.htm
      - listitem:
        - link "Products":
          - /url: http://www.parasoft.com/jsp/products.jsp
      - listitem:
        - link "Locations":
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
      - listitem:
        - link "Admin Page":
          - /url: admin.htm
    - list:
      - listitem:
        - link "home":
          - /url: index.htm
      - listitem:
        - link "about":
          - /url: about.htm
      - listitem:
        - link "contact":
          - /url: contact.htm
    - paragraph: Welcome andrew john agbalo
    - heading "Account Services" [level=2]
    - list:
      - listitem:
        - link "Open New Account":
          - /url: openaccount.htm
      - listitem:
        - link "Accounts Overview":
          - /url: overview.htm
      - listitem:
        - link "Transfer Funds":
          - /url: transfer.htm
      - listitem:
        - link "Bill Pay":
          - /url: billpay.htm
      - listitem:
        - link "Find Transactions":
          - /url: findtrans.htm
      - listitem:
        - link "Update Contact Info":
          - /url: updateprofile.htm
      - listitem:
        - link "Request Loan":
          - /url: requestloan.htm
      - listitem:
        - link "Log Out":
          - /url: logout.htm
    - list:
      - listitem: ATM Services
      - listitem:
        - link "Withdraw Funds":
          - /url: services/ParaBank?wsdl
      - listitem:
        - link "Transfer Funds":
          - /url: services/ParaBank?wsdl
      - listitem:
        - link "Check Balances":
          - /url: services/ParaBank?wsdl
      - listitem:
        - link "Make Deposits":
          - /url: services/ParaBank?wsdl
    - list:
      - listitem: Online Services
      - listitem:
        - link "Bill Pay":
          - /url: services/bank?_wadl&_type=xml
      - listitem:
        - link "Account History":
          - /url: services/bank?_wadl&_type=xml
      - listitem:
        - link "Transfer Funds":
          - /url: services/bank?_wadl&_type=xml
    - paragraph:
      - link "Read More":
        - /url: services.htm
    - heading "Latest News" [level=4]
    - list:
      - listitem: /\\d+\\/\\d+\\/\\d+/
      - listitem:
        - link "ParaBank Is Now Re-Opened":
          - /url: news.htm#6
      - listitem:
        - link "New! Online Bill Pay":
          - /url: news.htm#5
      - listitem:
        - link "New! Online Account Transfers":
          - /url: news.htm#4
    - paragraph:
      - link "Read More":
        - /url: news.htm
    - list:
      - listitem:
        - link "Home":
          - /url: index.htm
        - text: "|"
      - listitem:
        - link "About Us":
          - /url: about.htm
        - text: "|"
      - listitem:
        - link "Services":
          - /url: services.htm
        - text: "|"
      - listitem:
        - link "Products":
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem:
        - link "Locations":
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem:
        - link "Forum":
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem:
        - link "Site Map":
          - /url: sitemap.htm
        - text: "|"
      - listitem:
        - link "Contact Us":
          - /url: contact.htm
    - paragraph: © Parasoft. All rights reserved.
    - list:
      - listitem: "Visit us at:"
      - listitem:
        - link "www.parasoft.com":
          - /url: http://www.parasoft.com/
    `)
    await expect(mainPage.page).toHaveScreenshot({
      fullPage: true
    })
    await expect(mainPage.page).toHaveScreenshot({
      fullPage: true,
      clip: { x: 270, y: 65, width: 185, height: 480 }
    })
  })

  test('[TC02] Validate Open New Account page content', async ({ mainPage }) => {
    await mainPage.clickMenuItem('Open New Account')
    await expect(mainPage.getButtonOpenNewAccount).toBeEnabled()
    await expect(mainPage.getDropdownAccountType).toBeEnabled()
    await expect(mainPage.getDropdownAccounts).toBeEnabled()

    // this is a snapshot of the 
    await expect(mainPage.page.locator('#openAccountForm')).toMatchAriaSnapshot(`
    - heading "Open New Account" [level=1]
    - paragraph: What type of Account would you like to open?
    - combobox:
      - option "CHECKING" [selected]
      - option "SAVINGS"
    - paragraph: /A minimum of \\$\\d+\\.\\d+ must be deposited into this account at time of opening\\. Please choose an existing account to transfer funds into the new account\\./
    - combobox:
      - option /\\d+/ [selected]
    - button "Open New Account" 
    `)
  })

  test('[TC03] Validate Accounts Overview page content', async ({ mainPage }) => {
    await mainPage.clickMenuItem('Accounts Overview')
    await expect(mainPage.page.locator('#showOverview')).toMatchAriaSnapshot(`
    - heading "Accounts Overview" [level=1]
    - table:
      - rowgroup:
        - row "Account Balance* Available Amount":
          - cell "Account"
          - cell "Balance*"
          - cell "Available Amount"
      - rowgroup:
        - row /\\d+ \\$\\d+\\.\\d+ \\$\\d+\\.\\d+/:
          - cell /\\d+/:
            - link /\\d+/:
              - /url: activity.htm?id=13566
          - cell /\\$\\d+\\.\\d+/
          - cell /\\$\\d+\\.\\d+/
        - row /Total \\$\\d+\\.\\d+/:
          - cell "Total"
          - cell /\\$\\d+\\.\\d+/
          - cell
      - rowgroup:
        - row "*Balance includes deposits that may be subject to holds":
          - cell "*Balance includes deposits that may be subject to holds"
    `)
  })

  test('[TC04] Validate Transfer Funds page content ', async ({ mainPage }) => {
    await mainPage.clickMenuItem('Accounts Overview')
    await mainPage.clickMenuItem('Transfer Funds')
    await expect(mainPage.page.locator('#showForm')).toMatchAriaSnapshot(`
    - heading "Transfer Funds" [level=1]
    - paragraph:
      - text: "Amount: $"
      - textbox
    - text: "From account #"
    - combobox:
      - option /\\d+/ [selected]
    - text: "to account #"
    - combobox:
      - option /\\d+/ [selected]
    - button "Transfer"
    `)
  })

  test('[TC05] Validate Bill Pay page content ', async ({ mainPage }) => {
    await mainPage.clickMenuItem('Accounts Overview')
    await mainPage.clickMenuItem('Bill Pay')
    await expect(mainPage.page.locator('#billpayForm')).toMatchAriaSnapshot(`
    - heading "Bill Payment Service" [level=1]
    - paragraph: Enter payee information
    - table:
      - rowgroup:
        - row "Payee Name:":
          - cell "Payee Name:"
          - cell:
            - textbox
          - cell
        - row "Address:":
          - cell "Address:"
          - cell:
            - textbox
          - cell
        - row "City:":
          - cell "City:"
          - cell:
            - textbox
          - cell
        - row "State:":
          - cell "State:"
          - cell:
            - textbox
          - cell
        - row "Zip Code:":
          - cell "Zip Code:"
          - cell:
            - textbox
          - cell
        - 'row "Phone #:"':
          - 'cell "Phone #:"'
          - cell:
            - textbox
          - cell
        - row:
          - cell
        - 'row "Account #:"':
          - 'cell "Account #:"'
          - cell:
            - textbox
          - cell
        - 'row "Verify Account #:"':
          - 'cell "Verify Account #:"'
          - cell:
            - textbox
          - cell
        - row:
          - cell
        - 'row "Amount: $"':
          - 'cell "Amount: $"'
          - cell:
            - textbox
          - cell
        - row:
          - cell
        - 'row /From account #: \\d+/':
          - 'cell "From account #:"'
          - cell /\\d+/:
            - combobox:
              - option /\\d+/ [selected]
        - row "Send Payment":
          - cell
          - cell "Send Payment":
            - button "Send Payment"
    `)
  })

  test('[TC06] Validate Find Transactions page content', async ({ mainPage }) => {
    await mainPage.clickMenuItem('Find Transactions')
    await expect(mainPage.page.locator('#formContainer')).toMatchAriaSnapshot(`
    - heading "Find Transactions" [level=1]
    - text: "Select an account:"
    - combobox:
      - option /\\d+/ [selected]
    - separator
    - text: "Find by Transaction ID:"
    - textbox
    - button "Find Transactions"
    - separator
    - text: "Find by Date:"
    - textbox
    - text: ( MM-DD-YYYY )
    - button "Find Transactions"
    - separator
    - paragraph: Find by Date Range
    - text: Between
    - textbox
    - text: and
    - textbox
    - text: ( MM-DD-YYYY )
    - button "Find Transactions"
    - separator
    - text: "Find by Amount:"
    - textbox
    - button "Find Transactions"
    `)
  })

  test('[TC07] Validate Update Contact Info page content ', async ({ mainPage }) => {
    await mainPage.clickMenuItem('Update Contact Info')
    await expect(mainPage.page.locator('#updateProfileForm')).toMatchAriaSnapshot(`
    - heading "Update Profile" [level=1]
    - table:
      - rowgroup:
        - 'row "First Name: andrew john"':
          - cell "First Name:"
          - cell "andrew john":
            - textbox: andrew john
          - cell
        - 'row "Last Name: agbalo"':
          - cell "Last Name:"
          - cell "agbalo":
            - textbox: agbalo
          - cell
        - 'row /Address: \\d+ Bora Bora Street/':
          - cell "Address:"
          - cell /\\d+ Bora Bora Street/:
            - textbox: /\\d+ Bora Bora Street/
          - cell
        - 'row "City: Winnipeg"':
          - cell "City:"
          - cell "Winnipeg":
            - textbox: Winnipeg
          - cell
        - 'row "State: Manitoba"':
          - cell "State:"
          - cell "Manitoba":
            - textbox: Manitoba
          - cell
        - 'row /Zip Code: \\d+/':
          - cell "Zip Code:"
          - cell /\\d+/:
            - textbox: /\\d+/
          - cell
        - 'row /Phone #: \\d+/':
          - 'cell "Phone #:"'
          - cell /\\d+/:
            - textbox: /\\d+/
          - cell
        - row "Update Profile":
          - cell
          - cell "Update Profile":
            - button "Update Profile"
    `)
  })

  test('[TC08] Validate Request Loan page content', async ({ mainPage }) => {
    await mainPage.clickMenuItem('Request Loan')
    await expect(mainPage.page.locator('#requestLoanForm')).toMatchAriaSnapshot(`
    - heading "Apply for a Loan" [level=1]
    - table:
      - rowgroup:
        - 'row "Loan Amount: $"':
          - 'cell "Loan Amount: $"'
          - cell:
            - textbox
          - cell
        - 'row "Down Payment: $"':
          - 'cell "Down Payment: $"'
          - cell:
            - textbox
          - cell
        - 'row /From account #: \\d+/':
          - 'cell "From account #:"'
          - cell /\\d+/:
            - combobox:
              - option /\\d+/ [selected]
          - cell
        - row "Apply Now":
          - cell
          - cell "Apply Now":
            - button "Apply Now"
    `)
    await mainPage.wait(0.5)
  })

})
