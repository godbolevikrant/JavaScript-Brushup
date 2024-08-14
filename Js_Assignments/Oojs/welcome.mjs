//default export module
export default function greet(name){
return "Hey "+name 
}

export let msg="Hello World"

export class car{

    constructor(model, price){

        this.Model=model;
        this.Price=price;
    }
    show(){
        return "Model Of the car: " +this.Model + "Price: " +this.Price
    }
}

