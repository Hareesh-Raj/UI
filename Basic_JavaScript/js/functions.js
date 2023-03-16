// This function will print the numbers from 1 to 100
function printNumbers()
{
    for(let i = 1;i <= 100;i++)
    {
        console.log(i);
    }
}
//function call for printing the numbers.
printNumbers();

//Print the todays date in the format DD/MM/YYYY.
function getDate()
{
    const todayDate = new Date();
    let date = todayDate.getDate();
    if (date<10)
    {
        date = '0'+date;
    }
    let month=todayDate.getMonth();
    if (month<10)
    {
        month = '0'+month;
    }
    let year = todayDate.getFullYear();
    return date+"/"+month+"/"+year;
}

let date = getDate();
console.log(date);

//converting the celsius to fahrenheit value.
function getCelsius(celsius)
{
    return (celsius*9)/5+32;
}
//the function call is done here and the arguments are passed and the return values are stored.
let fahrenheit_value = getCelsius(20);
console.log(fahrenheit_value);

//calculating the average of given numbers.
function calcAverage(...numbers)
{
    var sum=0;
    for(let i of numbers)
    { 
        sum += i;
    }
    return sum/numbers.length;
}

let average = calcAverage(1,2,5,3);
console.log(average);

//reverse a string

function reverseString(value)
{
    return value.split("").reverse().join("");
}
let reversedString=reverseString("helloo");
console.log(reversedString);