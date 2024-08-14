// Object literal
let person={
name: 'Vikrant Godbole',
age: 28,
gender: 'Male'
}

// destructuring Object literal

let {

    name: person_Name,
    age: person_Age,
    gender: person_Gender

}=person

console.log("Name of the person: ",person_Name)
console.log("Age: ",person_Age)
console.log("Gender: ",person_Gender)

let {name,age,gender}=person

console.log(name)
console.log(age)
console.log(gender)

function funDemo({model,brand,price}){
console.log("Model: ",model)
console.log("Brand: ",brand)
console.log("Price: ",price)

}
let car={
    model:'verna',
    brand: 'Hyundai',
    price: 1400000

}
funDemo(car)


function funDemo1(){
    return {
        rollNo : 15,
        studName: 'Virat Kohali',
        percentage: 85

    }
}

let{rollNo,studName,percentage}=funDemo1()
console.log(rollNo)
console.log(studName)
console.log(percentage)