//Importing entire module
import * as h from  './msg.mjs'

console.log("Message: ", h.msg)
console.log("Addition is: ",h.add(100,200))

let p1=new h.person("Vikrant Godbole",28)
p1.showDetails();

