let storage = {
    "car": {
        "insinde":{
            "glove box": "maps",
            "passanger seat": "crumbs"
        },
        "outside":{
            "trunk": "jack"
        }
    }
}

let gloveBoxContents = storage.car.insinde["glove box"];

console.log(gloveBoxContents);