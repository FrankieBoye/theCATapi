describe('Frankies cat app homepage', function(){
  beforeEach(function() {
    cy.visit('index.html')
  })

  it('contains "Frankies Cat App" in the title', function(){
    cy.contains("Frankie's Cat App!")
  })

  it('has a visible CLICK FOR CAT! button', function() {
  cy.get('button').should('be.visible');
});
})
