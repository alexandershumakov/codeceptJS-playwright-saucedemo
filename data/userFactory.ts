const {faker} = require("@faker-js/faker");
const Factory = require("rosie").Factory;

export default class User {

    firstName: string;
    lastName: string;
    zipCode: string;

    constructor() {
        this.firstName = faker.name;
        this.lastName = faker.name;
        this.zipCode = faker.address;
    }
}




