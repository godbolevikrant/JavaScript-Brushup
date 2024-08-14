let book =
{
    title: 'The Secret',
    author: 'Rohonda Byrne',
    price : 499
}

console.log("Title"+book.title+"Author"+book.author+"Price"+book.price)

console.log("Title"+book['title']+"Author"+book['author']+"Price"+book['price'])

book.noOfPages=4244;
book.publication="bantam Books";

console.log("author"in book)
console.log("noOfPages"in book)

delete book.price
delete book.publication;

function printDetail(){
    console.log("Title:" +book['title']+"Author:"+book['author']+"No Of Pages:"+book['noOfPages'])
}

book.print=printDetail()
book.print()
