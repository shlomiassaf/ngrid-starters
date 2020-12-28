describe('material', () => {

  beforeEach(() => cy.visit('/') );

  it('should load grid with data', () => {
    cy.wait(500);
    cy.get('pbl-ngrid').matchImageSnapshot();
  });
});
