const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function indentityTwo(val: any): any{
    return val;
}

function identityThree<Type>(val:Type): Type {
    return val;
}

// common version of the function
// the adavantage of the syntax below is that you can easily define your own types and pass it to the function.
// It is generic
function identityFour<T>(val:T): T {
    return val;
}

// example
interface Bottle {
    brand: string,
    type: number
}

/* identityFour<Bottle>({}) */

// a function that takes in arrays, performs some logic and returns an array.
function getSearchProducts<T>(products: T[]): T {
    // do some logic
    const myIndex = 3
    return products[myIndex]
}

// arrow function
const getMoreSearchProducts = <T,>(products: T[]) => {
    // logic on db
    const myIndex = 4;
    return products[myIndex]
}