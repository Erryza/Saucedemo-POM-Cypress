import LoginPage from "../support/pageObject/loginPage";
const dataUsers = require("../fixtures/dataLogin.json");

describe("POM Implementation Login Page Saucedemo.com", () => {
  const login = new LoginPage();

  beforeEach(() => {
    cy.visit("/");
    cy.url().should("include", "/");
  });

  dataUsers.forEach((data) => {
    it(data.name, () => {
      login.inputUsername(data.username);
      login.inputPassword(data.password);
      login.btnLogin();

      if (data.name === "Verify login with a valid username & password") {
        login.successMessage(data.expected);
        login.waitScreenshot();
      } else {
        login.errMessage(data.expected);
        login.waitScreenshot();
      }
    });
  });
});
