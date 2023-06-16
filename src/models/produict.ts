export default class Product{
    id:number;
    title:string;
    type:string;
    price:string;

    constructor(id:number,title:string,type:string,price:string){
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, no-sequences
        this.id=id,
        this.title =title,
        this.type=type,
        this.price=price
    }
}