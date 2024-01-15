// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const {MailSlurp} = require('mailslurp-client')
const mailslurp = new MailSlurp({ apiKey: "503ff54c49b5a62068d6bc11d3f0ce589a4f95e78c76777f7f9010202297bba9" });

Cypress.Commands.add('createInbox', ()=>{
    return mailslurp.createInbox()
})

Cypress.Commands.add('waitForLatestEmail', (inboxId)=>{
    return mailslurp.waitForLatestEmail(inboxId, timeMillis)

})