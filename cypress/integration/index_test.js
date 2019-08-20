describe('Visiting WellDone site, checking for dashboard link', function() {
  it('Visits Well Done on Netlify', function() {
    cy.visit('https://frontend.welldone.now.sh');
  });
});

describe('Checking for the dashboard link', function() {
  it('finds the dashboard link', function() {
    cy.visit('https://frontend.welldone.now.sh');

    cy.contains('Dashboard');
  });
});

describe('Clicking the dashboard link', function() {
  it('clicks the dashboard link', function() {
    cy.visit('https://frontend.welldone.now.sh');

    cy.contains('Dashboard').click();
  });
});
