let car={
'register no': 'MH24 DH 7486',
 model: 'nexon',
 brand: "tata",
 price: 250000,

//local method
 printcar: function(){
  console.log("Register no="+car['register no']+ "\t Brand="+car.brand)
 }
 
}

car.show=printcar
car.show()

//console.log(car['register no'])

// using for- in loop 

/*for(let prop in car)
{
    console.log(car[prop])

}*/