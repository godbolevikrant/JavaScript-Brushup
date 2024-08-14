class Product
{
constructor(id,name,brand,pr)

{
    this.ProductId=id;
    this.name=name;
    this.Brand= brand;
    this.Price=pr;
}



printDetails()                 // Object method  non static method
{

console.log("Product Id: "+this.ProductId+  "\tName: " + this.name+ "\tBrand: " +this.Brand+ "\tPrice: " +this.Price)

}
static categoryInfo()          // class method    static method 
{

    console.log("Product Category")
    
}

}
Product.categoryInfo()            

let p1=new Product("A001","A56","samsung",52000)

p1.printDetails()

