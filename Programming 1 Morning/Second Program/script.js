//global variables get defined at the top of the page
let balance=100;
let stock=50;
let price=5;
//functions
hrsToMins(37);
hrsToMins(6);
hrsToMins(2.5);
function hrsToMins(hours){
    //local variable
    let result=hours*60;
    console.log(result);
    //returning this make it so i can use outsidfe of the function
    return result;
}
function hrsToDays(hours){
    //local variable
    let result=hours/24;
    console.log(result+" Days");
    return result;
}
hrsToDays(70);
//how cash registers workish
function sellItem(quanity){
    //check to see if we have enough stock
    if(stock>=quanity){
        //reduce mt stock
        stock-=quanity;
        // means the same as
        //stock = stock - quanity
        balance+=price*quanity
        //means the same
        //balance= balance + price * quanity
        console.log('purchase completed our new balance is $'+ balance+ ' Stock left '+stock)
    }
    else{
        console.log("not enough Stock");
    }
}
sellItem(15);
sellItem(40);
sellItem(-65);

let player={
    age:4000,
    height:7,
    name:'Bob',
    health:100,
    outfit:{
        color:'black',
        size:'xl',
        underwater:true
    }
};
console.log(player);
//accessing one piece of our player
console.log(player.name);
console.log(player['name']);
//change attributes of our player
player.age=7;
console.log(player);
//delete an attribute
delete player.name;
console.log(player);
//creating an attribute
player.legs='long';
console.log(player);
player.outfit.hat=true
//access object inside of the object
player.outfit.underwater=false;
console.log(player);
player.outfit.color="yellow";
//functions inside an object(method)
let hero={
    health:100,
    fun:0,
    play: function(food){
        if(food=='apple'){
            this.health+=10;
            //health=health+10
        }
        else if(food=='candy'){
            this.health+=5;
            this.fun+=5
        }
    }
}
hero.play('apple');
console.log(hero);
hero.play('candy');
console.log(hero);
//loops
//while loop
function sendhelp(){
    console.log('Send Help');
}
let i=0;
while(i<10){
    sendhelp();
    i++
    //i=i+1
    //i+=1
}
for(a=0; a<10; a++){
    sendhelp();
}
//arrays also called lists
let list=['immortal groundhog','right often','has carols',118];
console.log(list);
//change our list
list[3]=138;
console.log(list);
//add to our list
list.push('alliteration');
console.log('list');
//remove the last item
list.pop();
console.log(list);
//access specific array item
let groundhog=list[0];
console.log(groundhog);
//access last item ion array
let last=list[list.length-1]
console.log(last);
//lkist of objects
let database=[hero,player];
console.log(database);
