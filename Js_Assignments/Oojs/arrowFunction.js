// Arrow funtion defination
let hello=()=>{

    return "Hello World!"
}
// calling Arrow funtion via variable

let msg=hello()
console.log("Message is- "+msg)




let greeting=name=> console.log("Hey "+name)    //using single parameter 
greeting("Vikrant")                             // calling greeting funtion 



let add=(a,b)=>a+b                          // using double parameter 
let result=add(20,40)
console.log("Ans= "+result)
console.log("sum is = ",add(100,200))