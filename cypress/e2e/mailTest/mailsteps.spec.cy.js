Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
let data
  let inboxId
  let emailAddress
  let emailBody
  let OtpCode
describe('testing email token extraction', () => {
  before(()=>{
    cy.fixture('selectors').then((sel)=>{
      data = sel
    })
  })
  it('launch the page', () => {
    cy.visit('/')
  })
  it('click the create button', () =>{
    cy.get(data.createAccBtn).should('exist').click()

  })
  it('Type full name', function () { 
      cy.get(data.fullNameFld).should('exist').type('John Doe')
  
  })
  it('Type business name', function () { 
      cy.get(data.businessFld).should('exist').type('Automation123')
  
  })
  it('Fill in the business email field', function () { 
      cy.createInbox().then((inbox)=>{
          inboxId = inbox.id
          emailAddress = inbox.emailAddress
          cy.get(data.businessEmailFld).should('exist').type(emailAddress)
      })
  })
  it('Type phone number', function () { 
      cy.get(data.phoneNumberFld).should('exist').type('+2348012345672')
  })
  it('Type registered number', function () { 
      cy.get(data.registNubFld).should('exist').type('Business_1')
  
  })
  it('Click next button', function () { 
      cy.get(data.nextBtn).should('exist').click()
  
  })
  it('Type website', function () { 
      cy.get(data.websiteFld).should('exist').type('Test.com')
  
  })
  it('Click source dropdown', function () { 
      cy.get(data.chooseSource).should('exist').click()
  
  })
  it('Click IG button', function () { 
      cy.get(data.selectIG).click()
  
  })
  it('Type password', function () { 
      cy.get(data.passwordFld).should('exist').type('Micheal@me1')
  
  })
})