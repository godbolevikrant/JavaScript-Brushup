// Creating class

function Student()
{
    this.Name='Vikrant',
    this.rollNO=15,


this.print=function()
{
    console.log("Roll no: ",+this.rollNO+ "\nName: ",+this.Name)
}
}  // End of the student Class

// Creating object of student class

let s1= new Student();
s1.print();