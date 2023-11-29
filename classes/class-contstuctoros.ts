class User {
    readonly city: string = "Nairobi";
    constructor(
        public email: string,
        public name: string,
        private userID: string
    ){

    }
}

const felix = new User("minifelo@email.com", "felloh", " bof5489fkl");