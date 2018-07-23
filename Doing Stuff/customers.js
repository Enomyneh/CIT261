function addAndSaveCustomer() {
    var aName = document.getElementById("name_input").value
    var anAge = document.getElementById("age_input").value * 1
    var anInseam = document.getElementById("inseam_input").value * 1
    var aClothingCustomer = {
        "name": aName,
        "age": anAge,
        "inseam": anInseam
    }
    var allCustomers = null
    var storedCustomersString = localStorage["all_customers"]
    if (storedCustomersString == null) {
        allCustomers = []
    }
    else {
        allCustomers = JSON.parse(storedCustomersString)
    }
    allCustomers.push(aClothingCustomer)
    var allCusomersString = JSON.stringify(allCustomers)
    localStorage["all_customers"] = allCusomersString
    showAllCustomers()
    document.getElementById("name_input").value = null
    document.getElementById("age_input").value = null
    document.getElementById("inseam_input").value = null
}
function showAllCustomers() {
    var storedCustomersString = localStorage["all_customers"]
    if (storedCustomersString != null) {
        var allCustomers = JSON.parse(storedCustomersString)
        var customerDisplayer = document.getElementById("all_customers_display")
        customerDisplayer.innerHTML = null
        var numberOfCustomers = allCustomers.length
        for (var i = 0; i < allCustomers.length; i++) {
            var aClothingCustomer = allCustomers[i]
            customerDisplayer.innerHTML += "<hr><p>Customer: " + aClothingCustomer["name"] + "</p>" + "<p>Age: " + aClothingCustomer["age"] + "</p>" + "<p>Inseam: " + aClothingCustomer["inseam"] + "</p>"
        }
    }
}