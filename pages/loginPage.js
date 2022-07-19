const { I } = inject();

module.exports = {

    userNameField: 'input#user-name',
    passwordField: 'input#password',
    loginButton: 'input#login-button',

    open () {
        I.amOnPage('/');
    },

    login (username, password) {
        I.fillField(this.userNameField, username);
        I.fillField(this.passwordField, password);
        I.click(this.loginButton);
    },

    waitForOpen () {
        I.waitInUrl("/");
    }
}
