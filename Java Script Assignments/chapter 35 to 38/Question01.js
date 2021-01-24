var a = Number(prompt("Please Enter your subject Marks!!"));
var b = Number(prompt("Please Enter your subject Marks!!"));
var c = Number(prompt("Please Enter your subject Marks!!"));
var d = Number(prompt("Please Enter your subject Marks!!"));
var e = Number(prompt("Please Enter your subject Marks!!"));
var totalmarks = a + b + c + d + e;
var percentage = (totalmarks / 500) * 100;
switch(true){
    case (percentage >= 90):                        // Grade A+ 90% to 100%
        console.log("Grade A+");
        window.alert("Grade A+");
        document.write("<h1>Grade A+");
        break;

    case (percentage >= 75 && percentage < 90):      // Grade A 75% to 89% 
        console.log("Grade A");
        window.alert("Grade A");
        document.write("<h1>Grade A");
        break;

    case (percentage >= 60 && percentage < 75):      // Grade B 60% to 74% 
        console.log("Grade B");
        window.alert("Grade B");
        document.write("<h1>Grade B");
        break;

    case (percentage >= 45 && percentage < 60):      // Grade C 45% to 60% 
        console.log("Grade C");
        window.alert("Grade C");
        document.write("<h1>Grade C");
        break;

    case (percentage >= 30 && percentage < 45):      // Grade D 30% to 44% 
        console.log("Grade D");
        window.alert("Grade D");
        document.write("<h1>Grade D");
        break;

    case (percentage < 30):                         // Grade F 0% to 29%
        console.log("Fail");
        window.alert("Fail");
        document.write("<h1> Fail");
        break;

    default:
        console.log("There is an error. Please Enter again!");
        window.alert("There is an error. Please Enter again!");
        document.write("<h1>There is an error. Please Enter again!");       
}





