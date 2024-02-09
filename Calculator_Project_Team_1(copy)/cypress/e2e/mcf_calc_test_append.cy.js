// Testing calculator
describe("Testing the calculator", () => {
  beforeEach(() => {
    // Visit the calculator URL
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("should check the existence of calculator elements", () => {
    // Query for the elements with data-cy attributes.
    cy.get('[data-cy="calculator"]').should("exist");
    cy.get('[data-cy="screen"]').should("exist");
    cy.get('[data-cy="buttons"]').should("exist");
  });

  it("check all numbers append correctly", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="one"]').click(); // Click the "1" button
    cy.get('[data-cy="two"]').click(); // Click the "2" button
    cy.get('[data-cy="three"]').click(); // Click the "3" button
    cy.get('[data-cy="four"]').click(); // Click the "4" button
    cy.get('[data-cy="five"]').click(); // Click the "5" button
    cy.get('[data-cy="six"]').click(); // Click the "6" button
    cy.get('[data-cy="seven"]').click(); // Click the "7" button
    cy.get('[data-cy="eight"]').click(); // Click the "8" button
    cy.get('[data-cy="nine"]').click(); // Click the "9" button
    cy.get('[data-cy="zero"]').click(); // Click the "0" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]')
      .should("be.visible")
      .should("have.value", "1234567890");
  });
  //================================================================
  // check that if press any of x, /, +, -, %, =  on a blank display
  // ie. no number has been entered, then the screen remains blank
  //================================================================
  it("check multiply not visible", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="multiply"]').click(); // Click multiply button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "");
  });

  it("check '%'' not visible", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="percentage"]').click(); // Click the "%" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "");
  });

  it("check '-' not visible", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="subtract"]').click(); // Click the "-" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "");
  });

  it("check '+' not visible", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="add"]').click(); // Click the "+" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "");
  });

  it("check '=' not visible", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="equals"]').click(); // Click the "=" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "");
  });

  it("check '/' not visible", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="divide"]').click(); // Click the "7" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "");
  });

  //================================================================
  // check that if decimal point is first button clicked, then "."
  // does appear on screen
  //================================================================

  it("check '.' is visible", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="decimal"]').click(); // Click the "." button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", ".");
  });
});
