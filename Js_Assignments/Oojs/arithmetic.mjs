//import using alias only
import { mul } from "./myMath.mjs";

//while importing provide alias to member
import{div as div1 } from "./myMath.mjs"

let result=mul(10,20)
console.log("Ans is: ",result)

result=div1(300,20)
console.log("Ans: ",result)