describe("Visit Example Page and Interact with an Element", () => {
  it("Visit Example Page and Interact with an Element", () => {
    // visit the example page
    cy.visit("https://example.cypress.io/commands/actions");

    // Query for the action button with a class ".action-btn" and click on it.
    cy.get(".action-btn").click();

    // Query for the element with an id "#action-canvas" and click on it
    cy.get("#action-canvas").click();

    // Query for the element with an id "#action-canvas" and click on the "topLeft".
    cy.get("#action-canvas").click("topLeft");

    // Query for the element with an id "#action-canvas" and click on the "topLeft".
    cy.get("#action-canvas").click("bottomRight");
  });
});
