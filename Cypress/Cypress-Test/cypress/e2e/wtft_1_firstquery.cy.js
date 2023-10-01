describe("Visit Example Page and Interact with an Element", () => {
  it("Visit Example Page and Interact with an Element", () => {
    // visit the example page
    cy.visit("https://example.cypress.io");

    // Query for an Element (is's a class so use prefix .)
    cy.get(".home-list").contains("Querying").click();

    // Interact with the Element (it's an id so use prefix # )
    cy.get("#query-btn").should("contain", "Button").click();

    // Assert about Content on the page
    // first check that on correct url (do not need entire url, just last bit after url
    // given above)
    cy.url().should("include", "/commands/querying");
    cy.get(".query-list").should("have.length", 1);
    cy.get(".query-list>li").should("have.class", "first");
    // going into the first element of the list
    cy.get(".query-list>li.first").should("contain", "apples");
  });
});
