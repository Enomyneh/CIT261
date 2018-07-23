var superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

var batman = {
    "name": "Batman",
    "real name": "Bruce Wayne",
    "height": 74, 
    "weight": 210, 
    "hero": true, 
    "villain": false, 
    "allies": ["Robin","Batgirl","Superman"]
};


function supermanDetails() {
    for (const key in superman) {
        console.log(key + ": " + superman[key]);
    }
}

function batmanDetails() {
    for (const key in batman) {
        console.log(key + ": " + batman[key]);
    }
}