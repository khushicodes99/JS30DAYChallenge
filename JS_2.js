//Basic Program using logical operator to know whether age is between 10 & 20 
let age = prompt("What is your age?")
age = parseInt(age)
if(age>=10&&age<=20)
  console.log("Your age is between 10 & 20")
else
    console.log("Your age isn't between 10 & 20")

//Demonstration of Switch Case
let day = prompt("What is the day today?")
day = parseInt(day)
switch(day)
{
  case 1 : console.log("Its Monday,working day")
    break;
    
  case 2 : console.log("Its Tuesday,working day")
    break;
    
  case 3 : console.log("Its Wenesday,working day")
    break;
    
  case 4 : console.log("Its Thursday,working day")
    break;
  
  case 5 : console.log("Its Friday,working day")
    break;
  
  case 6 : console.log("Its Saturday,Weekend Chill!!!")
    break
      
  case 7 : console.log("Woohoo Woohoo,Its Sunday,Enjoy")
    break;
    
}

//Demonstration of Bitwise Operator
let num = prompt("Enter a number")
num = parseInt(num)
if(num%2==0&&num%3==0)
  console.log("Its divisible by 2 & 3")
else
    console.log("It's not divisible by 2 & 3")

//Simple Program to see if you could drive by ternary operator
let ages = prompt("What is your age?")
ages = parseInt(ages)
let res = (ages>=18)?"You can drive":"You can't drive"
console.log(res)