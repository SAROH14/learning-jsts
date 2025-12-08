let newCollection = {
    "2548": {
        "album": "Slippery When Wet",
        "artists": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2408": {
        "album": "1999",
        "artists": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245":{
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "Esmeraldas",
        "artists": "Crudo Means Raw",
        "tracks": [
            "Novena",
            "Maria"
        ]
    }
};

let collectionCopy = JSON.parse(JSON.stringify(newCollection));


function updateRecords(id, prop, value){

        if (value === ""){
            delete newCollection[id][prop];

        } else if (prop === "tracks"){

            newCollection[id][prop] = newCollection[id][prop] || [];  
            newCollection[id][prop].push(value);

        } else {

            newCollection[id][prop] = value;
            
        }
          
    return newCollection;
}
