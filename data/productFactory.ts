const Factory = require("rosie").Factory;

export default class Product {

    name1: string;
    cost1: string;
    numberOfProducts: number;
    id: number;


    build(attrs?) {
        return new Factory()

            .attr("name1", () => this.name1 = "Sauce Labs Fleece Jacket")
            .attr("cost1", () => this.cost1 = "$49.99")
            .attr("numberOfProducts", () => 1)
            .attr("id", () => 5)
            .attr("firstProduct", () => "Test.allTheThings() T-Shirt (Red)")
            .attr("secondProduct", () => "Sauce Labs Onesie")
            .attr("countOfProducts", () => "2")
            .attr("countOfProducts2", () => "1")
            .attr("firstProduct2", () => "Sauce Labs Backpack")
            .attr("secondProduct2", () => "Sauce Labs Bike Light")
            .attr("name2", () => "Sauce Labs Backpack")
            .attr("cost2", () => "$29.99")
            .attr("nameFirstProduct", () => "Sauce Labs Backpack")
            .attr("nameSecondProduct", () => "Sauce Labs Bike Light")
            .attr("nameThirdProduct", () => "Sauce Labs Bolt T-Shirt")
            .attr("costFirstProduct", () => "$29.99")
            .attr("costThirdProduct", () => "$15.99")
            .build(attrs);
    }
}





