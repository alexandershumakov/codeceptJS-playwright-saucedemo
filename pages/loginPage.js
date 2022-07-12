const { I } = inject();

module.exports = {

    userNameField: 'input#user-name',
    passwordField: 'input#password',
    loginButton: 'input#login-button',

    open () {
        I.amOnPage('/');
    },

    login (userName, password) {
        I.fillField(this.userNameField, userName);
        I.fillField(this.passwordField, password);
        I.click(this.loginButton);
    }
}
