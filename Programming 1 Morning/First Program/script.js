//How to make a variable
//ctrl+/ comment or uncomment whole blocks
let scribble=1000;
var pet='bearded dragon';
let buzzLightyear='action hero'
let beardedDragon=17
const cheese=false;
console.log(scribble);
console.log(pet);
console.log(cheese);

scribble=150;
console.log(scribble)
//additiopn subtraction
let a=52;
let b=20
let c= a+b;
console.log(c);
let d= b-a;
console.log(d)
let e=pet+c; 
console.log(e);
//multiplaction-division
let z=a*b
console.log(z);
let y=a/b;
console.log(y);

let t=2/3
console.log(t);

//modulus
let odd=3%2;
console.log(odd);

let num=5;
if(num%2==0){
    console.log("even number")
}
else{
    console.log("odd number")
}
if(pet=='bearded dragon'){
    console.log('you have a cool pet')
}
else{
    console.log('your pet is boring')
}
let age=17;
let money=true;
let condition2=money!=true || age<10
let condition1=age>=17 && money==true
let condition3=age<17 && money
if (condition1){
    console.log("you can watch R rated on your own");
}
else if(condition3){
    console.log("need a parent");
}
else if(condition2){
    console.log('you should not go see the movie')
}
else{
    console.log("you can't go see the movie");
}
let time=42
let spategetti= time==47;
if(spategetti){
    console.log("I have the answer");
}
else{
    console.log("I don't have the answer")
}
//assignment starts here
//Chechinkg to makesure my astronauts can gert to the moon
let fuel=1000000100;
let food =4564654
let passengers=1000
let asteroid=false;
//condition to make it
if(food/passengers>=1000 && fuel>=100000000){
    food=food/passengers
    console.log("You made it to mars")
    console.log("you didn't eat anyone on the way")
}
else if(food/passengers<1000 && fuel>100000000){
    passengers=passengers-(food/passengers);
    console.log("you made it to mars but it wasn't a pretty trip")
    console.log("you ate "+food/passengers+" passengers");
}
else if(asteroid){
    console.log("oh no you hit an asteroid and died")
}
else{
    console.log("You didn't make it to Mars, Did you get lost?")
    console.log("the colony has a memorial service for you")    
}

//go over a+=___
//go over a++
let owl=17;
let bear =32;
console.log(owl+=bear);
let tiger=owl+bear;
owl++
owl--
owl-=bear;
console.log(owl);
owl+=bear
console.log(owl)


