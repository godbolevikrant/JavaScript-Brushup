function add(a=10,b=20)            // Default parameter with values
{
return a+b
}
let result=add()
console.log("Ans= ",result)

result=add(100)                // Default parametr with explicit values
console.log("Ans= ",result)

result=add(100,200)               // both a and b values are explicit, default values will be ignored 
console.log("Ans= ",result)

result=add(undefined,400)          //  a gets default and b gets explicitly 
console.log("Ans= ",result)


function mul(a=10, b=a, c=a*b){
  return c
}

result=mul()
console.log("Result= ",result)

result=mul(5)                            // a will change
console.log("Result= ",result)

result=mul(5,10)                         // a nad b will change
console.log("Result= ",result)

result=mul(5,10,15)
console.log("Result= ",result)            // only c will return