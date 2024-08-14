// Craeting book class using parameterized constructor

function Book(code ,title, author,price){

    this.Code = code,
    this.Title = title,
    this.Author = author,
    this.Price = price,

    this.bookInfo=function()
    {
        return "Code of Book: " +this.Code +
                "\tTitile: " +this.Title+
                "\tAuthor: "  +this.Author+
                "\tPrice: "  +this.Price
    }
} //end of class


let bk1 = new Book("B001","Wings Of Fire"," Dr APJ Abdul Kalam",500)
console.log(bk1.bookInfo())