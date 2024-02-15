let yourScore=0;
let compScore=0;

let choiceAll=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

let yourScoreMsg=document.querySelector("#user-score");
let compScoreMsg=document.querySelector("#computer-score");
const genCompChoice=()=>{
    const arr=["rock","paper","scissors"];
    const radx=Math.floor(Math.random()*3);
    return arr[radx];
};

const drawMatch=()=>{
    msg.innerText="Draw match.play again";
    msg.style.backgroundColor="#081b31";
}

const winMatch=(userWin,userChoice,compChoice)=>{
    if(userWin){
        yourScore++;
        yourScoreMsg.innerText=yourScore;
        msg.innerText=`You win your ${userChoice} bets ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScoreMsg.innerText=compScore;
        msg.innerText=`You loose ${compChoice} bets your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawMatch();
    }
    else{
        userWin=true;
        if(userChoice==="rock"){
            //paper,scissors
            userWin=compChoice==="scissors"? true:false;
        }
        else if(userChoice==="paper"){
            //scissors,rock
            userWin=compChoice==="rock"? true:false;
        }
        else{
            //rock,paper
            userWin=compChoice==="paper"? true:false;
        }
        winMatch(userWin,userChoice,compChoice);
    }
}

choiceAll.forEach((c)=>{
    c.addEventListener("click",()=>{
        console.log("Clicked");
        const userChoice=c.getAttribute("id");
        playGame(userChoice);
    });
});