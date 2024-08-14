// spread operator 

let arr=[10,20,30];
let arr1=[100,200,300,...arr]     // merging

console.log(arr1)

let arr2=[1,2,...arr,3,...arr1]     //concatnation of two arrys
console.log(arr2)

let cityList1=['Pune','Mumbai','Nasik']
let cityList2=['nagpur','Solapur','Kolhapr']

let cities=[...cityList1,...cityList2]

console.log(cities)

// copy one arry to another

let arrCp=[arr]
console.log(arrCp)


//object literal

let car={
model: "Nexon",
brand: "tata",
price: 300000,
specification:{

    milage: 15.5,
    power: 12,
    fuelType: 'petrol',
    fuelCapcity: 80

}
}
console.log("Orignal Car: ",car)

let mycar={...car}              // shallow copy nasted objects are not copied
mycar.specification={...car.specification}        // Deep copy 

console.log("Duplicate car: ",mycar)

mycar.price=150000               // changing duplicate value 
console.log("Duplicate car: ",mycar)

car.model='Nexon Next-Gen'

console.log("Orignal Car: ",car)
console.log("Duplicate car: ",mycar)

mycar.specification.fuelType="Petrol + CNG"
console.log("Orignal Car: ",car)
console.log("Duplicate car: ",mycar)

car.specification.milage=17
console.log("Orignal Car: ",car)
console.log("Duplicate car: ",mycar)

