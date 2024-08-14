//importing multiple member fron msg.mjs

import { person,msg,add } from "./msg.mjs";           // we can do it single statement line  import { person} from "./msg.mjs";
console.log("Message: ",msg)

let p1=new person("Vikrant Godbole",28)
p1.showDetails()

let result=add(10,20)
console.log("Addtion is: ",result)
