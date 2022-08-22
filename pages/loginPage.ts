import {Locator} from "playwright";

const { I } = inject();

class LoginPage {

    private userNameField: Locator = locate ('input#user-name').as("User Name");
    private passwordField: Locator = locate ('input#password').as("Password");
    private loginButton: Locator = locate ('input#login-button').as("Login Button");

    constructor() {
        super ("/");
    }

    // open () : void {
    //     I.amOnPage('/');
    // },

    login (username, password) {
        I.fillField(this.userNameField, username);
        I.fillField(this.passwordField, password);
        I.click(this.loginButton);
    },

    waitForOpen () : void {
        I.waitInUrl("/");
    }
}

export = new LoginPage();