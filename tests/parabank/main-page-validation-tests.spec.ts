import { expect, data, test, path } from '../fixtures/pages.fixture'

test.describe('Parabank - Login Scenarios', async () => {
  test('[TC001] Main page snapshot after logging in', async ({ basePage }, testInfo) => {

    await expect(basePage.getContainerLeftPanel).toBeAttached()
    let urlx = basePage.page.url()

    console.log(urlx)

    // golden snapshot taken 0608
    await expect(basePage.page.locator('body')).toMatchAriaSnapshot(`
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
    `);
    await expect(basePage.page).toHaveScreenshot({
      fullPage: true
    });


        await expect(basePage.page).toHaveScreenshot({
      fullPage: true, 
      clip:{
        x:270, 
        y:65, 
        width:185, 
        height:480
      }
    });
  })


})
