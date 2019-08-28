const url = "http://localhost:3000"
// deployed url https://frontend.welldone.now.sh

describe("Visiting WellDone site, checking for Dashboard link", function() {
  it("Visits Well Done on Netlify", function() {
    cy.visit(url)
  })
})

describe("Checking for the Dashboard link", function() {
  it("finds the Dashboard link", function() {
    cy.visit(url)
    cy.contains("Dashboard")
  })
})

describe("Clicking the Dashboard link", function() {
  it("clicks the Dashboard link", function() {
    cy.visit(url)
    cy.contains("Dashboard").click()
  })
})

describe("Check that all status cards are showing on the Dashboard", function() {
  it("Checking that the status cards are present", function() {
    cy.contains("Monitor Reports")
    cy.contains("Functional")
    cy.contains("Non-Functional")
    cy.contains("Unknown")
  })
})
