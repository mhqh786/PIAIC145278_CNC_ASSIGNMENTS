var input01 = prompt("Tell me your obtained Marks in Pak Studies");
var input02 = prompt("What are Total Marks in Pak Studies");
var input03 = prompt("Tell me your obtained Marks in Islamiat");
var input09 = prompt("What are Total Marks in Islamiat");
var input04 = prompt("Tell me  your obtained Marks in Physics");
var input05 = prompt("What are Total Marks in Physics");
var input06 = prompt("Tell me your obtained Marks in Mathematics");
var input07 = prompt("What are total Marks in Mathematics");
var input08 = prompt("Tell me your Obtained Marks in Chemistry");
var input10 = prompt("What are Total Marks in Chemistry");
var obtmk11 = +input01 + +input03 + +input04 + +input06 + +input08;
var totmk12 = +input02 + +input09 + +input05 + +input07 + +input10;
window.alert("Your Obtained Marks are " + obtmk11);
window.alert("Your Total Marks are " + totmk12);
var percent = obtmk11 / totmk12 * 100;
window.alert("Your Marks percentage is " + percent);