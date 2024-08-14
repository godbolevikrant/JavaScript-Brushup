// rest parameter

function test(...a)     // it will work like arry 
{
    console.log("Lenth of rest parameter" ,a.length)
   for (let ale of a)
    {
        console.log(a)
    }
      
}

test()
test(10,20,40,'Vicky',true)


function fun(x,y,...args){

    console.log("X= ",x)
    console.log("Y= ",y)
    console.log("Size of rest parameter= ",args.length)

    for(let abc of args)
        {
            console.log(abc)
        }
}
fun()
fun(100,200)
fun("hello", 100, 20, 50, "Vicky", true)