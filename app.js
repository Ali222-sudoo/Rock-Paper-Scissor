let userScore=0;
let compScore=0;

let choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const userScoreU=document.querySelector("#user-score");
const compScoreU=document.querySelector("#comp-score");

const getComputerChoice=()=>{
    const choices=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);
    return choices[randomIndex];
}


itsATie=()=>{
    console.log("It's a tie!");
    msg.innerText="It's a tie!";
    msg.style.backgroundColor="brown";

}

const playGame=(userChoice)=>{
    console.log("User choice is",userChoice);
    const compChoice=getComputerChoice();
    console.log("Computer choice is",compChoice);

    if (userChoice===compChoice){
        itsATie();
    }else{
        if (userChoice==="rock" && compChoice==="scissors" || 
            userChoice==="paper" && compChoice==="rock" || 
            userChoice==="scissors" && compChoice==="paper"){
            console.log("You Win!");
            msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor="Blue";

            userScore++;
            userScoreU.innerText=userScore;
        }else{
            console.log("You Lose!");
            msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
            msg.style.backgroundColor="Red";
            compScore++;
            compScoreU.innerText=compScore;
        }
    }


}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});