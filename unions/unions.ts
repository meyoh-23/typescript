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

// using methods on the union data types
function getDatabaseID(id: number | string) {
    // use conditional loops t check 
    if (typeof id === "string") {
        id.toLowerCase()
    } else {
        id.toFixed(4);
    }
}

// arrays and unions
const data: number[] = [1,2,3];
const data2: string[] = ["me", "222", "Him"];

// not allower => the spacification given means that the datatype can either be all numbers or all strings but onot a mix
/* const data3: string[] | number[] = [1, "222", "Three", 444]  */

// the best way to do such a declaration is as shown below
const data3: (string | number)[] =[1, "222", "Me", 459];

// giving a range of strict values to a variable
//this means the variable seatAllotment can only have either of the values provided
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle" // this is allowed
/* seatAllotment = "end" */  // => this is not allowed