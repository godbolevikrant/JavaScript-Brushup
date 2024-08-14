//Object Literal
let person={
name: "Vikrant Godbole",
age: 29,
gender: "male",
weight: 58
}

console.log(person.name)
console.log(person['age'])
console.log("gender="+person.gender)
console.log("weight="+person['weight']) 


// adding new property
person.city="Latur"

console.log(person.city)

// checking existng property 

console.log('city' in person)
console.log('state' in person)

// removing proprty from object

delete person.weight
console.log('weight' in person)

//global function 

function printInfo(){
console.log("Name= " +person.name+ "\t age= "+person.age)

}
//craete new method to property which refers to global funtion 

person.show=printInfo

//calling method of person 
person.show()