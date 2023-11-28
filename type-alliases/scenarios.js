"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "1234567890",
    name: "Felix",
    isActive: false,
    email: "mimiuser@gmail.com"
};
myUser.email = "sinaemail@gmail.com"; // operation is it isa allowed
/* myUser._id = "1234"; */ // this is not allowed since the property isset as a readonly
function createUser(myUser) { }
