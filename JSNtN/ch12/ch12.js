class Dice {
    constructor(sides = 6) {
        this.sides = sides;
    }
    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }

    static description() {
        return "A way or choosing random numbers";
    }
}

const d20 = new Dice(20);
console.log("Rolling a d20:", d20.roll());

class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack() {
        return `Feel the power of my ${this.weapon}!`;
    }
}

const turt = new Turtle("Greg");
console.log(turt.sayHi());
console.log(turt.attack());

class Hero {
    constructor(name, realname, quirk) {
        this.name = name;
        this.realname = realname;
        this.quirk = quirk;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
    attack() {
        return `My power is ${this.quirk}!`;
    }
}

const hero = new Hero("Deku", "Midorya", "One for All");
console.log(hero.sayHi());
console.log(hero.attack());
