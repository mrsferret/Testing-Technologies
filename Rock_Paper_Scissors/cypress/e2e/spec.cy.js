describe("Testing Rock, Paper, Scissors Game", () => {
  beforeEach(() => {
    // Visit the calculator URL
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("checks buttons exist", () => {
    // Query for the action button with a class ".action-btn" and click on it.
    // Query for the elements with data-cy attributes.
    cy.get('[data-cy="rock"]').should("exist");
    cy.get('[data-cy="paper"]').should("exist");
    cy.get('[data-cy="scissors"]').should("exist");
    cy.get('[data-cy="header"]').should("exist");
  });

  // check that action correct when click rock button
  it("checks rock button works correctly when clicked", () => {
    cy.get('[data-cy="rock"]').click();

    // Verify that the result is correct.
    cy.get('[data-cy="result"]')
      .should("be.visible")
      .should("include.text", "Your choice: Rock.");
  });

  // check that action correct when click paper button
  it("checks paper button works correctly when clicked", () => {
    cy.get('[data-cy="paper"]').click();

    // Verify that the result is correct.
    cy.get('[data-cy="result"]')
      .should("be.visible")
      .should("include.text", "Your choice: Paper.");
  });

  // check that action correct when click scissors button
  it("checks scissors button works correctly when clicked", () => {
    cy.get('[data-cy="scissors"]').click();

    // Verify that the result is correct.
    cy.get('[data-cy="result"]')
      .should("be.visible")
      .should("include.text", "Your choice: Scissors.");
  });

  // Check rock button combinations

  it("checks messgae when rock button clicked and computer chooses rock", () => {
    cy.get('[data-cy="rock"]').click();

    // select the computer choice message
    cy.get('[data-cy="choice"]').then(($computer_choice) => {
      // computer choice = rock
      if ($computer_choice.text().includes("Rock")) {
        cy.get('[data-cy="result"]')
          .should("be.visible")
          .should("include.text", "Your choice: Rock. It's a tie!");
      }
    });
  });

  it("checks messgae when rock button clicked and computer chooses paper", () => {
    cy.get('[data-cy="rock"]').click();

    // select the computer choice message
    cy.get('[data-cy="choice"]').then(($computer_choice) => {
      // computer choice = paper
      if ($computer_choice.text().includes("Paper")) {
        cy.get('[data-cy="result"]')
          .should("be.visible")
          .should("include.text", "Your choice: Rock. Computer wins!");
      }
    });
  });

  it("checks messgae when rock button clicked and computer chooses scissors", () => {
    cy.get('[data-cy="rock"]').click();

    // select the computer choice message
    cy.get('[data-cy="choice"]').then(($computer_choice) => {
      // computer choice = scissors
      if ($computer_choice.text().includes("Scissors")) {
        cy.get('[data-cy="result"]')
          .should("be.visible")
          .should(
            "include.text",
            "Your choice: Rock. You win! Rock beats Scissors."
          );
      }
    });
  });

  // Check paper button combinations
  it("checks messgae when paper button clicked and computer chooses paper", () => {
    cy.get('[data-cy="paper"]').click();

    // select the computer choice message
    cy.get('[data-cy="choice"]').then(($computer_choice) => {
      // computer choice = paper
      if ($computer_choice.text().includes("Paper")) {
        cy.get('[data-cy="result"]')
          .should("be.visible")
          .should("include.text", "Your choice: Paper. It's a tie!");
      }
    });
  });

  it("checks messgae when paper button clicked and computer chooses scissors", () => {
    cy.get('[data-cy="paper"]').click();

    // select the computer choice message
    cy.get('[data-cy="choice"]').then(($computer_choice) => {
      // computer choice = scissors
      if ($computer_choice.text().includes("Scissors")) {
        cy.get('[data-cy="result"]')
          .should("be.visible")
          .should("include.text", "Your choice: Paper. Computer wins!");
      }
    });
  });

  it("checks messgae when paper button clicked and computer chooses rock", () => {
    cy.get('[data-cy="paper"]').click();

    // select the computer choice message
    cy.get('[data-cy="choice"]').then(($computer_choice) => {
      // computer choice = rock
      if ($computer_choice.text().includes("Rock")) {
        cy.get('[data-cy="result"]')
          .should("be.visible")
          .should(
            "include.text",
            "Your choice: Paper. You win! Paper covers Rock."
          );
      }
    });
  });

  // Check scissors button combinations
  it("checks message when scissors button clicked and computer chooses paper", () => {
    cy.get('[data-cy="scissors"]').click();

    // select the computer choice message
    cy.get('[data-cy="choice"]').then(($computer_choice) => {
      // computer choice = paper
      if ($computer_choice.text().includes("Paper")) {
        cy.get('[data-cy="result"]')
          .should("be.visible")
          .should(
            "include.text",
            "Your choice: Scissors. You win! Scissors cut Paper."
          );
      }
    });
  });

  it("checks messgae when scissors button clicked and computer chooses scissors", () => {
    cy.get('[data-cy="scissors"]').click();
    // select the computer choice message
    cy.get('[data-cy="choice"]').then(($computer_choice) => {
      // computer choice = scissors
      if ($computer_choice.text().includes("Scissors")) {
        cy.get('[data-cy="result"]')
          .should("be.visible")
          .should("include.text", "Your choice: Scissors. It's a tie!");
      }
    });
  });

  it("checks messgae when scissors button clicked and computer chooses rock", () => {
    cy.get('[data-cy="scissors"]').click();

    // select the computer choice message
    cy.get('[data-cy="choice"]').then(($computer_choice) => {
      // computer choice = rock
      if ($computer_choice.text().includes("Rock")) {
        cy.get('[data-cy="result"]')
          .should("be.visible")
          .should("include.text", "Your choice: Scissors. Computer wins!");
      }
    });
  });

  // check that action correct when click rock button
  /*it("checks rock button works correctly when clicked", () => {
    cy.get('[data-cy="rock"]').click();

    cy.get('[data-cy="choice"]').then($computer_choice) => {

      if($computer_choice.contains("Rock")){
        cy.get('[data-cy="result"]')
      .should("be.visible")
      .should("include.text", "Your choice: Rock. It's a tie!");
      }

    }
    
    
  });*/

  //cy.get('[data-cy="rock"]').click();
  //cy.get('[data-cy="paper"]').click();
  //cy.get('[data-cy="scissors"]').click();
});
