//ASSIGNMENT_1: Write a javascript function that accepts a number as a parameter  and checks whether the number is positive , negative or zero.
function check(num)
{
    if (num>0)
    {
        return "POSITIVE";
    }
    else if (num<0)
    {
        return "NEGATIVE";
    }
    else{
        return "ZERO";
    }
}
console.log(check(0));
console.log(check(1));
console.log(check(-1));

//using conditional operator.
 function checknum(num1)
 {
   return  (num1>0) ? "POSITIVE" : (num1<0) ? "NEGATIVE":"ZERO";
 }
 console.log(checknum(0));

//  ASSIGNMENT_2: Write a javascript function to find the largest number in an array given as a parametr.(use arrow function)

let find=( num)=>
{
    let largest= num[0]
    for(let i=0;i<num.length;i++)
    {
        if (num[i]>largest)
        {
            largest= num[i];
        }
    }
    return largest;
}
console.log(find([1,2,3,5]));

// ASSIGNMENT_3: Write a program to find the area of cylinder using JavaScript objects(radius,height and the area function should be in the object)
let obj1=
{
    radius:2,
    height:2,
    pi:3.14,
    FindArea: function()
    {
        return obj1.radius*obj1.height* obj1.pi*2;
    }
}
console.log(obj1.FindArea())


//ASSIGNMENT_4: Write a program to find the area of square and rectangle using JavaScript objects with common area function.(use this keyword)
let objRect={
    lenght:2,
    breadth:3,
    areaRect1:area
}
let objSqu={
    lenght:3,
    breadth:3,
    areaRect1:area
}
    function area()
    {
        return this.lenght*this.breadth;
        
    }
   

console.log(objRect.areaRect1());