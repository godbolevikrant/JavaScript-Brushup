//Exporting Message 
//export let msg="Good afternoon"
let msg="Good afternoon"
//Exporting funtion
//export function add(a,b){
   function add(a,b){
return a+b;
}
// Exporting class
//export class person{
   class person{
   constructor (name,age)
   {
    this.Name=name;
    this.Age=age;
   }

   showDetails(){
   console.log("Name: "+this.Name+"\nAge: " +this.Age)

   }

}
// Exporting all member using single export statment
export {msg,add,person}