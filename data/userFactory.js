const {faker} = require("@faker-js/faker");
const Factory = require("rosie").Factory;

module.exports = new Factory()
    .attr("firstName", () => faker.name.firstName())
    .attr("lastName", () => faker.name.lastName())
    .attr("zipCode", () => faker.address.zipCode());