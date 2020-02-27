describe('Frankies cat app homepage', function(){
  beforeEach(function() {
    cy.visit('index.html')
  })

  it('contains "Frankies Cat App" in the title', function(){
    cy.contains("Frankie's Cat App!")
  })
})
