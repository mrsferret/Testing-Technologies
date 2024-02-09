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

  it("check all number 1 button work correctly", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="one"]').click(); // Click the "1" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "1");
  });

  it("check all number 2 button work correctly", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="two"]').click(); // Click the "2" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "2");
  });

  it("check all number 3 button work correctly", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="three"]').click(); // Click the "3" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "3");
  });
  it("check all number 4 button work correctly", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="four"]').click(); // Click the "4" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "4");
  });

  it("check all number 5 button work correctly", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="five"]').click(); // Click the "5" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "5");
  });
  it("check all number 6 button work correctly", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="six"]').click(); // Click the "6" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "6");
  });

  it("check all number 7 button work correctly", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="seven"]').click(); // Click the "7" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "7");
  });

  it("check all number 8 button work correctly", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="eight"]').click(); // Click the "8" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "8");
  });
  it("check all number 9 button work correctly", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="nine"]').click(); // Click the "9" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "9");
  });

  it("check all number 0 button work correctly", () => {
    // Perform calculations and verify the result.
    cy.get('[data-cy="zero"]').click(); // Click the "0" button

    // Verify that the result is correct.
    cy.get('[data-cy="screen"]').should("be.visible").should("have.value", "0");
  });
});
