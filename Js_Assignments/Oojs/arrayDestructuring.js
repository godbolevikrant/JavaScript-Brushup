let arr= [10,20,30,40]

let[a,b,c,d]=arr;  // Destructuring arry

console.log("A: ",a)
console.log("B: ",b)
console.log("C: ",c)
console.log("D: ",d)

// let [x,y,z]=arr; Destructuring array with new elemets
let [,x,y,z]=arr;         // Destructuring 2nd 3rd and 4th value
// let [,,y,z]=arr;    Desturcturing last 2 elemets of array of size 4 

console.log("X: ",x)
console.log("Y: ",y)
console.log("Z: ",z)

let [c1,c2,c3,c4,c5]=arr;
//let [c1,c2,c3,c4,c5=100]=arr;    default value will be ignored
//let [c1,c2=500,c3,c4,c5=100]=arr;    c2 value wont change
console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)
console.log(c5)

//using rest syntax/ rest argumet 

let [x1,x2,...args]=arr;

console.log("X1= ", x1)
console.log("X2= ", x2)
console.log(args)


//
function fun ([a,b,c])
{
   return a+b+c;
}

let arr1=[50,14,65]
let result=fun(arr1)
console.log(result)

//

function getCities(){
return ['Pune', 'Mumbai', 'Nagpur', 'Nasik']
}

let [city1, city2, city3, city4]=getCities()
console.log(city1)
console.log(city2)
console.log(city3)
console.log(city4)