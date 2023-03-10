describe('Navegation Bar', () => {
  before(function (){
    cy.visit('http://zero.webappsecurity.com/index.html')
  })

  it('should display Online Banking content', () => {
    cy.contains('Online Banking').click()
    cy.url().should('include', 'online-banking.html')
    cy.get('h1').should('be.visible')
  })

  it('should display feedback content', () => {
    cy.contains('Zero Bank').click()
    cy.contains('Feedback').click()
    cy.url().should('include', 'feedback.html')
    cy.get('h3').should('be.visible')

  })

  it('should display homepage content', () => {
    cy.contains('Zero Bank').click()
    cy.contains('Home').click()
    cy.url().should('include', 'index.html')
    

  })
})