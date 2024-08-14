let car={
name: 'Punch',
brand:'tata',
price: 2400000,
number: 'MH24 DH 7486'

}

function printCars(){
    console.log("car Name="+this.name+ "\nBrand="+this.brand+ "\nPrice"+this.price+ "\nCar Number"+this['number'])
}

car.show=printCars
car.show()