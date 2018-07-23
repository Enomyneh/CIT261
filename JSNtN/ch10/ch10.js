function amIOldEnough(age) {
    console.log(age);
    if (isNaN(age)) {
        throw "Not a number";
    }
    if (age == 12) {
        alert(age);
        return 'No, sorry.';
    } else if (age < 18) {
        return 'Only if you are accompanied by an adult.';
    }
    else {
        return 'Yep, come on in!';
    }
}

function checkAge() {
    let age = document.getElementById("age").value;
    try {
        let result = amIOldEnough(age);
        console.log(result);
    } catch(error) {
        console.error(error);
    }
    
}
