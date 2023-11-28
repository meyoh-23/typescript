
// creditcardDetails is marked as an
type UserData = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number
}

let myUser: UserData = {
    _id: "1234567890",
    name: "Felix",
    isActive: false,
    email: "mimiuser@gmail.com"
}

myUser.email = "sinaemail@gmail.com"; // operation is it isa allowed
/* myUser._id = "1234"; */ // this is not allowed since the property isset as a readonly

function createUser(myUser: UserData){}

// combining several types to form a new type
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}



export{}