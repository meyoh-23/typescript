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