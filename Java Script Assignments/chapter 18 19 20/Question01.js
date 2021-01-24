var courses = [];
for (var i = 0; i < 5; i++){
    courses.push ( prompt("Please enter Course Name. " + [i]));
    
}
window.alert(courses);
console.log(courses);
for(var i = 0; i < 5; i++){
    courses.splice(i,i+1,prompt("You can Edit course name" , courses[i]));
}
window.alert(courses);
console.log(courses);