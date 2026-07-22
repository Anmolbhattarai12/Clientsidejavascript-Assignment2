

// Add student information using JavaScript
var studentInfo = document.querySelector("#studentInfo");
studentInfo.textContent = "Name: Anmol Bhattarai | Student ID: 200573451";

// Select form and output paragraph
var pizzaForm = document.querySelector("#pizzaForm");
var orderOutput = document.querySelector("#orderOutput");

// Pizza class
class Pizza {
    constructor(customerName, size, crust, sauce, cheese, toppings, instructions) {
        this.customerName = customerName;
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.cheese = cheese;
        this.toppings = toppings;
        this.instructions = instructions;
    }

    // Method that builds and returns the pizza order 
    getDescription() {
        var toppingText = "";

        if (this.toppings.length > 0) {
            toppingText = this.toppings.join(", ");
        } else {
            toppingText = "No toppings selected";
        }

        var instructionText = "";

        if (this.instructions === "") {
            instructionText = "No special instructions";
        } else {
            instructionText = this.instructions;
        }

        return "Thank you, " + this.customerName + "!\n\n" +
            "Pizza Size: " + this.size + "\n" +
            "Crust Type: " + this.crust + "\n" +
            "Sauce Type: " + this.sauce + "\n" +
            "Cheese: " + this.cheese + "\n" +
            "Toppings: " + toppingText + "\n" +
            "Special Instructions: " + instructionText;
    }
}

// Form submit event
pizzaForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate the form
    if (!pizzaForm.checkValidity()) {
        pizzaForm.reportValidity();
        return;
    }

    // Capture values from form inputs
    var customerName = document.querySelector("#customerName").value;
    var pizzaSize = document.querySelector("#pizzaSize").value;
    var crustType = document.querySelector("#crustType").value;
    var sauceType = document.querySelector("#sauceType").value;
    var cheese = document.querySelector("input[name='cheese']:checked").value;
    var instructions = document.querySelector("#instructions").value;

    // Capture selected toppings
    var selectedToppings = document.querySelectorAll("input[name='toppings']:checked");
    var toppings = [];

    for (var i = 0; i < selectedToppings.length; i++) {
        toppings.push(selectedToppings[i].value);
    }

    // Create a new Pizza object
    var customerPizza = new Pizza(
        customerName,
        pizzaSize,
        crustType,
        sauceType,
        cheese,
        toppings,
        instructions
    );

    // Output the pizza description 
    orderOutput.textContent = customerPizza.getDescription();
});