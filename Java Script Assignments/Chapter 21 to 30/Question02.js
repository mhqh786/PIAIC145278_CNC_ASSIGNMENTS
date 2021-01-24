var inputValue = prompt("Enter this string to capitalize", "cloUd naTive computinG");
str = inputValue.toLowerCase();
var str2 = str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
console.log(str2);
document.write("<h1>" + str2);