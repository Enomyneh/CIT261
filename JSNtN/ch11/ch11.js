(function () {
    const temp = 'World';
    console.log(`Hello ${temp}`);

    const clark = { name: 'Clark' };
    const bruce = { name: 'Bruce' };

    function sayHello(greeting = 'Hello') {
        return `${greeting}, my name is ${this.name}`;
    }

    sayHello.call(bruce, "Hi");
    sayHello.call(clark, "Sup")

})();

(function () {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(), today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);

    party();
})();

function party() {
    console.log('Wow this is amazing!');
    party = function () {
        console.log('Been there, got the T-Shirt');
    }
}

function party() {
    console.log('Been there, got the T-Shirt');
}

//Promises and callbacks
(function () {
    var dice = {
        sides: 20,
        roll() {
            return Math.floor(this.sides * Math.random()) + 1;
        }
    }
    console.log('Before the roll');
    const roll = new Promise((resolve, reject) => {
        const n = dice.roll();
        if (n > 1) {
            setTimeout(() => { resolve(n) }, n * 200);
        } else {
            setTimeout(() => reject(n), n * 200);
        }
    });
    roll.then(result => console.log(`I rolled a ${result}`))
        .catch(result => console.log(`Drat! ... I rolled a ${result}`));
    console.log('After the roll');

})();
