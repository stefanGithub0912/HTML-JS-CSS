window.alert("Hello!");
console.log("Date - 02/23/2024");
//! Variables: int - x; double/float - y; boolean - z; string - names ; char - symbol
let a = 0;
let x = 100;
let y = 100.5;
let z = false;
let names = "Stefan";
let symbol = '@';
//?const k = 3.14159 - for a constant variable(cant be changed)
//! Display in console
//*console.log(x+"\n"+y+"\n"+z+"\n"+names+"\n"+symbol);
//! Display in site
document.getElementById("p1").innerHTML = "Hello " + names+" <-string";
document.getElementById("p2").innerHTML = "int = X = " + x;
document.getElementById("p3").innerHTML = "double = Y = " + y;
document.getElementById("p4").innerHTML = "boolean = z = " + z;
document.getElementById("p5").innerHTML = "char = symbol = " + symbol;
//! Math expresions
a += 10;
a -= 10;
a *= 10;
a /= 10;
//! Math
Math.PI;        //^PI
Math.ceil;      //^priravnqva do nai nisko cqlo chislo
Math.floor;     //^priravnqva do nai golqmo cqlo chislo
Math.abs;       //^Module - |x|
Math.max;       //^Max of num
Math.min;       //^Min of num
//! Input
let username = window.prompt("Whats you're name: ");
console.log(username);
let username2;
document.getElementById("myButton").onclick = function(){
    username2 = document.getElementById("myText").value;
    console.log(username2);
    document.getElementById("myLabel").innerHTML = username2;
}
//!Convert
let age = window.prompt("How old are you: ");
age = Number(age);
age+= 1;
console.log("Happy birthday , you are - "+age);
//! Random num
let g = Math.floor(Math.random()*11); //? 0 do 10
g = Math.floor(Math.random()*10)+1; //? 0 do 10
console.log(g);
//! Lenght
console.log("Lenght of - Stefan"+names.length);
console.log("Char of - Stefan"+names.charAt(0));
console.log("Remove space from string"+names.trim);
let phoneNum = "1234-567-9889";
phoneNum = phoneNum.replaceAll("-","+")
console.log(phoneNum)
//! if-else
if(x>a)
{
    console.log("X > a")
}
else if(x == a)
{
    console.log("Equal")
}
else{
    console.log("X < a")
}
//* with boolean
if(z){
    console.log("Z is true")
}else console.log("Z is false");z = true
//& Html button
document.getElementById("myButton1").onclick = function(){
    if(document.getElementById("myCheckBox").checked == true){
        console.log("You are a teenager")
    }
    else{
        console.log("You are not a teenager")
    }
}
//! Switch case
let grade = "F";
switch(grade){
    case "A":
        console.log("You are perfect");
        break;
    case "B":
        console.log("Nice!");
        break;
    case "C":
        console.log("Mehhh");
        break;
    case "D":
        console.log("Bad");
        break;  
    case "F":
        console.log("Failure!!!!!!!!!!!");
        break;
    default:
        console.log("Invalid");
        break;
}
//! Other
//^ &&-and(Both operators need to be true)
//^ ||-or(Only 1 thing has to be true for working)
//^ !=-is it diffrent   || !x - makes it opsite
//^ console.log("........${varible}..")
//! While
//? 1.Check 2.Action
while(x < a){
    x++;
}
//? 1.Action 2.Check
do{
    x++
}while(x<a)
//! For
let i = 1;
for(i;i<=10;i++){
    console.log(i)
}
i = 0;
for(i;i<=5;i++){
    for(let j = 1;j<=10;j++){
        console.log(j);
    }
}
//! Function
let o = 1
function mathematics(){
    if(o % 2 == 0){
        console.log("O is devideble by two - ",o)
    }else{
        console.log("O isn't devideble by two - ",o)
    }
}
mathematics();mathematics();
//! Return
let area;
let width;
let height;
height = window.prompt("Height: ");
width = window.prompt("Width: ");
area = getArea(width , height);
console.log("Area is - ",area);
function getArea(width,height){
    return width*height;
    return area >= 100 ? true : false;
}
//! Arrays
let numbers = [1,2,3,4,5,6,7,8,9,10];
let index = numbers.indexOf(9)
console.log(numbers[0]); //& 1st elemnt
numbers.push(11);        //& add an elemnt
numbers.pop();           //& remove last elemnt
numbers.unshift(12);      //& adds elemnt in beggining
numbers.shift();            //& removes elemnt in begging
//! Classes
//* Blueprint for creating objects and methods they have
class Player{
    score = 0;
    pause(){
        console.log("Paused game");
    }
    exit(){
        console.log("You exited the game");
    }
}
const player1 = new Player();
//* Call class for const
console.log(player1.pause());

//& Constructor classes
//* For unique purpose - acsepts arguments and assign properties
class Student{

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log("He is studying");
    }
}
const student1 = new Student("Joe",20,3.5);
const student2 = new Student("Biden",80,0.5);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

