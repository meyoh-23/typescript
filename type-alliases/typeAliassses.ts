
// defining types  for a data that is to be passed to a function
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

// passing alias to the function
// for this case, the user is an object with the actual data being passed to the function
function createUserOne(user: User) {}

// actual function call now
createUserOne({name: "", email: "", isActive: false})