const objToSearch = {
    "name": "Tony",
    "age": 21,
    "vehicles": {
        "car": "limousine",
        "bike": "ktm-duke",
        "airlines": {
            "lufthansa": "Air123",
            "British airways": "Brt707"
        }
    }
};

function objectSearchByKey(object, originalKey, matches = []) {
    if (object != null) {
        if (Array.isArray(object)) {
            for (let arrayItem of object) {
                objectSearchByKey(arrayItem, originalKey, matches);
            }
        } else if (typeof object == 'object') {

            for (let key of Object.keys(object)) {
                if (key == originalKey) {
                    matches.push(object);
                } else {
                    objectSearchByKey(object[key], originalKey, matches);
                }
            }
        }
    }
    return matches;
}

function objectSearchByValue(object, originalValue, matches = []) {
    if (object != null) {
        if (Array.isArray(object)) {
            for (let arrayItem of object) {
                objectSearchByValue(arrayItem, originalValue, matches);
            }
        } else if (typeof object == 'object') {
            for (let key of Object.keys(object)) {
                if (object[key] == originalValue) {
                    matches.push(object);
                } else {
                    objectSearchByValue(object[key], originalValue, matches);
                }
            }
        }
    }
    return matches;
}

console.log(objectSearchByKey(objToSearch, 'lufthansa'))

console.log(objectSearchByValue(objToSearch, 'limousine'))