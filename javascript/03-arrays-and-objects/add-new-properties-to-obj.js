let myNewDog = {
    "name": "Santiago",
    "legs": 5,
    "tails": 9,
    "friends": ["Everyone"]

};

myNewDog.bark = "bow-wow";

let ourNewDog = {
    "name": "Jorge",
    "legs": 3,
    "tails": 5,
    "friends": ["No one", "Samuel"]

};

ourNewDog["bark"] = "woof!";

console.table(ourNewDog);