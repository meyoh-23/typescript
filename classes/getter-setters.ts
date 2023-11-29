// access modiefiers
// protected properties are accessible within the class as well as the classes that inherit from the partucular class

class Users {

    protected _courseCount = 1;

    readonly city: string = "Nairobi";
    constructor(
        public email: string,
        public name: string,
        private userID: string //private property
    ){
    }

    //private method
    private deleteToken() {
        console.log("token delated");
    }

    getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course Count should be more thsn 1")
        }
        this._courseCount = courseNum;
    }
}

// inheritance
// will not access private properties and methods
class subUser extends Users {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4 
    }
}

const vick = new Users("minifelo@email.com", "felloh", " bof5489fkl");