const {faker} = require("@faker-js/faker");
const Factory = require("rosie").Factory;

module.exports = new Factory()
    .attr("firstnameOfPayer", () => faker.name.firstName())
    .attr("surnameOfPayer", () => faker.name.lastName())
    .attr("postcodeOfPayer", () => faker.address.zipCode());


