describe('ngrid-material-starter', () => {

  beforeEach(() => {
    cy.viewport('macbook-15');
    cy.visit('/');
  });

  it('should load grid with data', () => {
    cy.wait(500);
    cy.matchImageSnapshot();
  });
});
