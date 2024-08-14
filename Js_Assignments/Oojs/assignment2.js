let product={
'product name': "Mobile",
brand: "samsung"
}
console.log(`Product name is: ${product['product name']} `)
console.log(`Brand:${product.brand}`)

product.price=32000

for(prop in product)
    {
        console.log(product[prop])
    }