var myname = prompt("what is yoru name?");
var dtOfBirth = prompt("Please Enter your Date of Birth ", "for example date is '24'");
var mnOfBirth = prompt("Please Enter your Month of Birth ", "for example Month is '05'");
var yrOfBirth = prompt("Please Enter your Year of Birth ", "for example Year is '1999'");

function timeFunction(myname) {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
      greeting = "Dear " + myname + " Good morning";
    } else if (time < 20) {
      greeting = "Dear " + myname + " Good Afternoon";
    } else {
      greeting = "Good evening Dear " + myname;
    }
   console.log (greeting);
  }
  timeFunction(myname);

  console.log("Your Date of Birth is " + dtOfBirth + "." + mnOfBirth + "." + yrOfBirth);
  //var d = new Date();
  //var myage = d.getFullYear() - yrOfBirth;
  //console.log(myage);
  console.log("You are " + (new Date().getFullYear() - yrOfBirth)  + " Years Old");