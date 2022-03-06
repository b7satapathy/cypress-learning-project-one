/// <reference types= "cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/elements");
  });

  it("locating elements with get", () => {
    // Get all elements by tag name
    cy.get("button");
    cy.get("h3");

    //Get all elements by className
    cy.get(".btn-with-class");

    //Get all elements with specific classes
    cy.get("[class= 'Elements-btn btn-with-class']");
    cy.get("[class= 'Elements-btn btn-with-class more-btn-classes']");

    //Get all elemnts by id
    cy.get("[id='btn-with-id'");
  });
});
