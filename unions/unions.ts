let score: number | string = 33;
score = "55";
score = 44;

// essentials for functins that accepts multiple values or returns multiple values
type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let htesh: User | Admin = { name: "hitesh", id: 334};
htesh = {username: "hitesh", id: 332}

// example using a function
function getDBID(id: number | string) {
    // make API calls to the DB
    console.log(`DB id is ${id}`);
}

getDBID(3);
getDBID("3");