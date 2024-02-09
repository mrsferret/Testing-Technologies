// Testing calculator
describe('Testing the calculator', () => {
  beforeEach(() => {
    // Visit the calculator URL 
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it('should check the existence of calculator elements', () => {
    // Query for the elements with data-cy attributes.
    cy.get('[data-cy="calculator"]').should("exist");
    cy.get('[data-cy="screen"]').should("exist");
    cy.get('[data-cy="buttons"]').should("exist");
  });

  it('should perform addition correctly', () => {
    // Perform adding calculations and verify the result.
    cy.get('[data-cy="seven"]').click(); // Click the "7" button
    cy.get('[data-cy="add"]').click(); // Click the "+" button
    cy.get('[data-cy="three"]').click(); // Click the "3" button
    cy.get('[data-cy="equals"]').click(); // Click the "=" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should('be.visible').should('have.value', '10');

  });

  
});
