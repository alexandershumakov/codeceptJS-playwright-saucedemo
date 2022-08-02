const Factory = require("rosie").Factory;

module.exports = new Factory()
    .attr("name", () => "Sauce Labs Fleece Jacket")
    .attr("coast", () => "$49.99")
    .attr("numberOfProducts", () => 1)
    .attr("id", () => 5);