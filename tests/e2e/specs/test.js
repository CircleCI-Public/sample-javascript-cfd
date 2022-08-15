// https://docs.cypress.io/api/introduction/api.html

describe("Sample Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("ion-title", "Continuous Food Delivery");
  });
});
