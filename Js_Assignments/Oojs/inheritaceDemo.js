// Craeting super class
class Employee{

    constructor(empId,name)
    {
        //Initializing data member of the object 
       this.empId= empId,
       this.name= name;

    }
    show()         // Instacne method
    {
        console.log("Employee Name: ",this.empId+"Employee Name: "+this.name)
    }
} //End of the Sper class


// Craeting sub class

class Manager extends Employee{
  constructor(empId,name,incentive){
    super(empId,name)
    this.incentive=incentive;

  }
  getIncetive(){
    return this.incentive;
  }

} // End of the subclass

// Craeting object of superclass 
let e1= new Employee(101,"Vikrant Godbole")
e1.show();

// crating object of sub class
let m1=new Manager(201,"Raksha",50000)
m1.show();

//calling special method

let incen=m1.getIncetive();
console.log("Incentive of the Manager: ",incen)

