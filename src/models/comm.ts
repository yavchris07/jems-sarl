export default class Comm{
    id:number;
    depart:string;
    destination:string;
    duration:string;

    constructor(id:number,depart:string,destination:string,duration:string){
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-sequences
        this.id=id,
        this.depart =depart,
        this.destination=destination,
        this.duration=duration
    }
}