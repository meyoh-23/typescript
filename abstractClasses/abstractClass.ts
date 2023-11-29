abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void
}
// a new instance of an abstatct calss cannot be initiated
// a new instance can however be created from a class extending an abstract class


class Ig extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
}