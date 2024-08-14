let arr=[10,20,30,40,50]
console.log(arr)

arr.sort()          //ascending order
console.log(arr)


arr.sort( function(p1,p2) //decending order
{
  if(p1<p2)
  return 1;

  if(p1>p2)
  return -1;

  else
  return 0;
})
console.log(arr)

arr.sort( function(p1,p2) //ascending order
{
  if(p1>p2)
  return 1;

  if(p1<p2)
  return -1;

  else
  return 0;
})
console.log(arr)


let nameList=["Radhika", "Aaman","Yogesh","pranav"]
console.log(nameList)

nameList.sort()
console.log(nameList)

nameList.sort( function(p1,p2) //decending order
{
  if(p1<p2)
  return 1;

  if(p1>p2)
  return -1;

  else
  return 0;
})
console.log(nameList)

nameList.sort((p1,p2)=>p1>p2?-1:1) // using turnary operator
console.log(nameList)
