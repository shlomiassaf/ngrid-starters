describe('ngrid-material-starter', () => {
  beforeEach(() => cy.visit('/'));

  it('should load grid with data', () => {
    cy.viewport(1200, 800);
    cy.wait(500);
    cy.matchImageSnapshot();
  });
});
