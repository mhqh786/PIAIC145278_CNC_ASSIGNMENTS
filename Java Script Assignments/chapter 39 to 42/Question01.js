var text = prompt("Please Enter a sentece to get Upper Case letter of every word");
function capital_letter() 
{

    str = text.split(" "); //str.split(" ");
    x = str.length;
    for (var i = 0; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    console.log(str.join(" "));
    //return str.join(" ");
}

//console.log(capital_letter(text));
capital_letter();