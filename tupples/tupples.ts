// some thread on stack overflow covering tuples that I shouls check on later

/* const user: (string | number)[] = [1, "hc"]; */
// in the case of tupples, the order of the data types on the array mateer
let user: [string, number, boolean]

user = ["hc", 123, true]

// usecase scenario for tupples
let rgb: [number, number, number] = [255, 123, 145];

// declared the datatypes of the user, and then declared a new user and supplied the exact datatypes
type User = [number, string];
const newUser: User = [123, " mimimeyoh@gmail.com"];

// demonstrating limitations of turples in typescript
// it behaves like array, and has all the methods of the array, which when implentnated, sometimes forces the declared dataset not to follow the predefined restrictions
newUser[1] = "hc@gmai.com"; // this is allowed
newUser.push("true"); // a third value has been added, but is against the restrictions provided