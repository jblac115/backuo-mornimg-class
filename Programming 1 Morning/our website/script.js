// //1. select what you are trying to change
// let sign=document.getElementById('sign');
// console.log(sign);
// //2. modify it
// console.log(sign.textContent);
// //modify
// sign.textContent='Groundhog Day is the best!!'
// console.log(sign.textContent);
// sign.innerHTML= sign.innerHTML + '<p style="color:blue";>Phil is the best Groundhog</p>'
// //change style
// sign.style.color = 'green' 

// //multidemsional arrays
// let happy=[[1,2,3],[4,5,6],[7,8,9]];
// console.log(happy);
// let five=happy[1][1];
// console.log(five);
// console.log(happy[1][1]);

// function gambe(b){
//     let a =b*90;
//     console.log(a);
   
// }
// let b = gambe(5);
// console.log(b);
let question={
    title:'How old is Phil?',
    alternatives:[14,138,97,23],
    correctAnswer:1
};
let questions=[
    {
        title: 'When is Groundhog Day?',
        alternatives: ['Feb. 2',"March 3",'July 18',"Dec. 17"],
        correctAnswer: 0
    },
    {
        title: 'How old is Phil',
        alternatives: [138,17,30,97],
        correctAnswer: 0
    },
    {
        title: 'Did the Groundhog See His Shoadow?',
        alternatives: ['Yes',"No",'I dont care',"What is a groundhog?"],
        correctAnswer: 0
    },
    {
        title: 'How many people attended the event this year?',
        alternatives: ["30,000","15,000",'150,000',"98,000"],
        correctAnswer: 0
    },
    {
        title: 'Who is the main star of the movie Groundhog Day?',
        alternatives: ['Bill Murray',"Anthony Daniels",'Hugo Weaving',"Dilbert Sulivan"],
        correctAnswer: 0
    },
    {
        title: 'Why was Feb. 2 picked for Groundhog Day?',
        alternatives: ['Its a cross quarter',"Just a random date",'Because it was already a holiday',"It was already the best day"],
        correctAnswer: 0
    },
    {
        title: 'What part of the traditional groundhog day is no longer celebrated?',
        alternatives: ['We dont eat the groundhog',"We put out fake snow",'They send a fox out to hunt the groundhog',"We still actually use a hedgehog"],
        correctAnswer: 0
    },
    {
        title: 'Statistically speaking how often is Phil correct',
        alternatives: ['100%',"42%",'87%',"52%"],
        correctAnswer: 0
    },
    {
        title: 'What was originally almost the name of groundhog day?',
        alternatives: ['Badger Day',"Wolverine Day",'Phils Day',"Tuesday"],
        correctAnswer: 0
    },
    {
        title: 'Which president met Phil in 1986?',
        alternatives: ['Ronald Reagan',"Jimmy Carter",'Gerald Ford',"Richard Nixon"],
        correctAnswer: 0
    },
    {
        title: 'What is the name of Phils wife?',
        alternatives: ['Phyllis',"Marjorie",'Pamela',"Karen"],
        correctAnswer: 0
    },
]
let app={
    start:function(){
        this.currPosition=0
        this.score=0;
        //select by a query
        let alts=document.querySelectorAll('.alternatives');
        // //bind appproach
        // alts.forEach(function(element,index){
        //     //listening for events
        //     element.addEventListener('click',function(){
        //    this.checkAnswer(index)
        //     }.bind(this));
        // }.bind(this));
        //arrow function approach
        alts.forEach((element,index)=>{
            //listening for events
            element.addEventListener('click',()=>{
           this.checkAnswer(index)
            });
        });
        this.updateStats();
        this.showQuestion(question);
   },
   showQuestion:function(q){
    this.currQuestion=q
    //1. select element
    let titleDiv=document.getElementById('title');
    //modify it
    titleDiv.textContent=q.title
    //show alternatives
    let alts=document.querySelectorAll('.alternatives')
    alts.forEach(function(element,index){
        element.textContent=q.alternatives[index];
    });
    },
    checkAnswer: function(userSelected){
        if(this.currQuestion.correctAnswer==userSelected){
            //correct
            console.log('correct Answer');
            this.score++
            //this.score+=1
            //this.score=this.score+1
            this.showResult(true);
        }
        else{
            //wrong
            console.log('wrong answer')
            this.score--;
            //this.score-=1
            //this.score=this.score-1
            this.showResult(false);
        }
        this.increasePosition();
        this.updateStats();
        //show next question
        this.showQuestion(questions[this.currPosition]);
    },
    increasePosition:function(){
        this.currPosition++
        //if you get to the end want to start over
        if(this.currPosition==questions.length){
            this.currPosition=0;
            // this.score=0;
            // let resultDiv=document.getElementById('result');
            // resultDiv.textContent="your done!"
        }
    },
    updateStats:function(){
        //select the score element
        let scoreDiv=document.getElementById('score');
        //display the score
        scoreDiv.textContent="Your Score: "+this.score;
    },
    showResult: function(isCorrect){
        //select DOM Element
        let resultDiv=document.getElementById('result');
        let result='';
        //check if we are right or wrong
        if(isCorrect){
            result='Correct Answer'
        }
        else{
            //get the current question
            let currQuestion=questions[this.currPosition]
            //get the correct answer (index)
            let correctAnswerIndex=currQuestion.correctAnswer
            let correctAnswerText=currQuestion.alternatives[correctAnswerIndex]
            result='Wrong Answer'+correctAnswerText
        }
        resultDiv.textContent=result;
    }
}


app.start();

let a=Math.floor(Math.random()*5);
console.log(a);
