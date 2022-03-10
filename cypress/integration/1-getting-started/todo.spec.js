/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
describe("Reach the application", () => {
  it("should open project page", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Breeds *");
    cy.contains("Please enter number of images");
    cy.contains("View Images").click();
  });
});

describe("Check request from api", () => {
  it("should send request to get breed data", () => {
    cy.visit("http://localhost:3000");
    // cy.contains("Breeds").click().select("BULLDOG");
    // cy.contains("Number of Images").click().type("5");
    cy.get("[id^=breed-select]").click().get("[data-value^=bulldog]").click();
    cy.get("[id^=subBreed-select]").click().get("[data-value^=french]").click();
    cy.get("[id^=numberOfImagesInput]").click();
    cy.contains("View Images").click();
  });
});
