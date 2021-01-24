var fact = Number(prompt("Please Enter a Number for Factorial!!"));
function factorial(nunbr)
{
    var multiply = 1;
    for(var i = 1; i <= nunbr; i++)
    {        
        multiply = multiply * i;
    }
console.log(multiply);
factorialUlta(nunbr);
}

function factorialUlta(nunbr)
{
    var multiply = 1;
    for(var i = nunbr; i >= 1; i--)
    {        
        multiply = multiply * i;
    }
console.log(multiply);

}
factorial(fact);