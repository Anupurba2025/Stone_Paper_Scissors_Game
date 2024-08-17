let userScore=0;
let comScore=0;
const choices=document.querySelectorAll(".choice");
let startAgainBtn= document.querySelector(".StartBtn");
let msgContainer = document.querySelector(".msg-container");

console.log(startAgainBtn);
//fetch the user choice
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked with the id ",userChoice);
        playGame(userChoice);
        startAgainBtn.classList.remove("hide");
        // msgContainer.classList.add("hide");
    });
});

//generate the computer choice
const computerChoice=()=>{
    //rock,paper,sciccores
    const options=["stone","paper","sciccors"];
    const randomChoice=Math.floor(Math.random()*3); //Math.floor( helps to convert the 1.098 any fraction number to a whole number such as 1)
    //math.random()*n helps to generate any random number ranges in between 0-(n-1)
    console.log(randomChoice); 
    return options[randomChoice];
}

const playGame=(userChoice)=>{
    console.log("userchoice is =",userChoice);
    
    //fetch the computer choice
    const compchoice=computerChoice();
    console.log("computerchoice is =",compchoice);
    displayChoices(userChoice,compchoice);

    if(userChoice===compchoice){
        //draw game
        drawGame();
    } 
    else{
        let userWin=true;
        if(userChoice==="stone"){
            userWin= compchoice=== "paper" ? false:true;
        }
        else if(userChoice==="sciccors"){
            userWin = compchoice==="stone" ? false:true;
        }
        else{
            userWin= compchoice==="sciccors" ? false:true;
        }
        showWinner(userWin);
        updateScore(userWin);
    }
}

const displayChoices = (userChoice, compChoice) => {
    const userChoiceDisplay = document.getElementById("userChoiceDisplay");
    const compChoiceDisplay = document.getElementById("compChoiceDisplay");
    const winnerContainer = document.getElementById("winnerContainer");
    const vsDisplayImage =document.getElementById("vsDisplay");
    // Update the innerHTML with the selected choice images or text
    var x;
    if(userChoice==="paper"){
        x="paper";
    }
    else if(userChoice==="sciccors"){
        x="sciccors";
    }
    else{
        x="stone_final";
    }

    var y;
    if(compChoice==="paper"){
        y="paper";
    }
    else if(compChoice==="sciccors"){
        y="sciccors";
    }
    else{
        y="stone_final";
    }
    userChoiceDisplay.innerHTML = `<p class=paraShow>User</p><br><img class="images" src="./images/${x}.png" alt="${x}"> ` ;
    vsDisplayImage.innerHTML=`<img class="images" src="./images/vs-image.jpeg" alt="vs image">`;
    compChoiceDisplay.innerHTML = `<p class=paraShow>Computer</p><br><img class="images" src="./images/${y}.png" alt="${y}">`;

    // Remove the hide class to display the winner-container
    winnerContainer.classList.remove("hide");
}

const msgShow=document.querySelector("#msg-show");


showWinner=(userWin)=>{
    if(userWin){
        console.log("User wins");
    }
    else{
        console.log("computer wins");
    }

}
const drawGame=()=>{
    console.log("Draw game");
}

let scoreBoard=document.querySelectorAll("score-board");
let updateUserScore=document.querySelector("#user-score");
let updateCompScore=document.querySelector("#comp-score");

console.log(updateUserScore);

//function for updating the  score
const updateScore=(userWin)=>{
    if(userWin){
        userScore= userScore + 1;
        updateUserScore.innerText=`${userScore}`;
    }
    else{
        comScore= comScore + 1;
        updateCompScore.innerText=`${comScore}`;
    }
}

//handling for button part

startAgainBtn.addEventListener("click",()=>{
    startAgainBtn.classList.add("hide");
    winnerContainer.classList.add("hide");
    userScore= 0;
    updateUserScore.innerText=`${userScore}`;
    comScore= 0;
    updateCompScore.innerText=`${comScore}`;
});

