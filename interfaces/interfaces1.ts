interface User {
    readonly databaseID: string,
    email: string,
    userID: number,
    googleID?:string,
    /* startTrial: () => string */
    startTrial(): string
    getCoupon(couponname: string, offer: number): number
}

// injecting additional value to the interface
interface User {
    githubToken: string
    userCode?: string
}

const felix: User = {
    databaseID: "f42f544934fj", 
    email: "mimifelloh@gmail.com", 
    userID: 2233,
    startTrial: () => {
        return "trial Started"
    },
    getCoupon: (name: "coupon", offer: 22) => {
        return 10
    },
    githubToken: "1gjer2475g95bb",
    userCode: "2gmt77"
};

// inheritance with interfaces
interface Admin extends User {
    role: "admin" | "learner" | "tutor"
}

/* Type Aliases ans intefaces on documentation  : 02 38 16 */