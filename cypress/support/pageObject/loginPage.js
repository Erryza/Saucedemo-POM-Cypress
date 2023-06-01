import { elementsLogin } from "../locators/loginLocator";
import { elementsInventory } from "../locators/inventoryLocator";

class LoginPage {
  inputUsername(username) {
    cy.get(elementsLogin.elUsername)
      .clear()
      .then((e) => {
        if (username !== "") cy.wrap(e).type(username);
      });
  }

  inputPassword(password) {
    cy.get(elementsLogin.elPassword)
      .clear()
      .then((e) => {
        if (password !== "") cy.wrap(e).type(password);
      });
  }

  btnLogin() {
    cy.get(elementsLogin.elButton).click();
  }

  errMessage(expected) {
    cy.get(elementsLogin.elMessage).should("have.text", expected);
  }

  successMessage(expected) {
    cy.get(elementsInventory.elTitle).should("have.text", expected);
  }

  waitScreenshot() {
    cy.screenshot();
  }
}

export default LoginPage;
