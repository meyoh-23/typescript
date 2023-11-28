const User = {
    name: "Felix",
    email: "mimimeyoh@gmail.com",
    isAvailable: false,
}

// when a function accepts an object
function createUser({name: string, isPaid: boolean}) {}

//passing arguments to a function call
// will specificall take in only arguments taht have neen spacified in the fucntion declaration
createUser({name: "felix", isPaid: false});

let newUser = {
    name: "felloh",
    isPaid: false,
    email: "mimiMEyoh@gmail.com"
}

// accepting optional parameter "email".
createUser(newUser);

// when a function returns an object

function createCourse():{name: string, price: number}{
    return {name: "TypeScript", price: 320}
}

export{}