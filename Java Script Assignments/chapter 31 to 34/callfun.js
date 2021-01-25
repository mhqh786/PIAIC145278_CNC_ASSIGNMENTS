var myname = prompt("what is yoru name?");
var dtOfBirth = prompt("Please Enter your Date of Birth ", "for example date is '26'");
var mnOfBirth = prompt("Please Enter your Month of Birth ", "for example Month is '07'");
var yrOfBirth = prompt("Please Enter your Year of Birth ", "for example Year is '1977'");

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

  
  var rightNow = new Date();
  var totalAge = new Date(mnOfBirth + '/' + dtOfBirth + '/' + yrOfBirth);
  console.log("Your Date of Birth is " + totalAge);
  var diffage = rightNow.getTime() - totalAge.getTime();
  
  
  var rem0 = (Math.floor((diffage) / (1000 * 60 * 60 * 24 * 365)));
  //console.log(Math.floor((diffage) / (1000 * 60 * 60 * 24 * 365)));
  var rem1 = rightNow.getMonth() - totalAge.getMonth();
  var rem = rightNow.getDay() - totalAge.getDay();
  var rem2 = rightNow.getHours() - totalAge.getHours();
  var rem3 = rightNow.getMinutes() - totalAge.getMinutes();
  var rem4 = rightNow.getSeconds() -  totalAge.getSeconds();
  console.log("You are " + Math.abs(rem0) + " Years " + Math.abs(rem1) + " Months " + Math.abs(rem) + " Days " + Math.abs(rem2) + " Hours " + Math.abs(rem3) + " Minutes and " + Math.abs(rem4) + " Seconds old.");
  var ageInDays = diffage / (1000 * 60 * 60 * 24);
  console.log("Your age in Days " + Math.floor(ageInDays));
  
  
  var birthDay = new Date('7/26/2021');
  var birthDay1 = birthDay.getMonth() - rightNow.getMonth();
  var birthDay2 = birthDay.getDay() - rightNow.getDay();
  var birthDay3 = birthDay.getHours() - rightNow.getHours();
  var birthDay4 = birthDay.getMinutes() - rightNow.getMinutes();
  var birthDay5 = birthDay.getSeconds() - rightNow.getSeconds();
  console.log(Math.abs(birthDay1) + " Months " + Math.abs(birthDay2) + " Days " + Math.abs(birthDay3) + " Hours " + Math.abs(birthDay4) + " Minutes " + " and " + Math.abs(birthDay5) + " Seconds remaining in your coming birth Day.");




//   var ageInYear = totalAge.getFullYear() - rightNow.getFullYear();
//   var ageInMonth = totalAge.getMonth() - rightNow.getMonth();
//   console.log(ageInMonth);
//   var ageInDays = totalAge.getDay() - rightNow.getDay();
//   var ageInHours = totalAge.getHours() - rightNow.getHours();
//   var ageInMinutes = totalAge.getMinutes() - rightNow.getMinutes();
//   var ageInSeconds = totalAge.getSeconds() - rightNow.getSeconds();
//   var ageInYear = (diffage * -1) / (1000 * 60 * 60 * 24 * 365);
//   var ageInMonth = (diffage * -1) / (1000 * 60 * 60 * 24 * 30);
//   var ageInDays = (diffage * -1) / (1000 * 60 * 60 * 24);
//   var ageInHours = (diffage * -1) / (1000 * 60 * 60);
//   var ageInMinutes = (diffage * -1) / (1000 * 60);
//   var ageInSeconds = (diffage * -1) / (1000);
// console.log("You are " + (ageInYear * -1) + " Years " + ageInMonth + " Months " + ageInDays + " Days " + ageInHours + " Hours " + ageInMinutes + " Minutes and " + ageInSeconds + " Seconds old.");