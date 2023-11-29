interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

// you cannot do what is less than necessary
class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

// you can do more that necessary
class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string // an additonal property that is not included in the  interface
    ){}

    // impementing the method from the Story Interface
    createStory(): void {
        console.log("A story was created");
    }
}
