var text2 = "";
put = prompt("put a decimal number");
put2 = Math.ceil(put);
console.log(put2);
var text = "This is a dummy text.";
text1 = text.slice(0, 4);
// console.log(text1);
for (var i = text1.length -1; i >= 0; i--){
    text2 += text1[i];
    
}
console.log(text2);