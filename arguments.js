function getFullName(firstName, lastName) {
    let fullName = " ";
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        let elements = arguments[i];
        fullName = fullName + " " + elements;

    }

    return fullName;
}

let name = getFullName("Shakil ", "Ahmad", 'abul', 'kabul', 'hakim');
console.log(name);