let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const you = document.querySelector("#user-score");
const opp = document.querySelector("#comp-score");
const res = document.querySelector("#reset");


const playrepeat = () =>{
    userscore = 0;
    you.innerText = userscore;
    compscore = 0;
    opp.innerText = userscore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "rgb(193, 157, 38)";

};

const gencompchoice = () =>{
    const options = ['rock', 'paper', 'scissors'];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}
const drawgame = () =>{
    console.log("It was a great Tie");
    msg.innerText = "It was a great Tie, play again";
    msg.style.backgroundColor = "rgb(193, 157, 38)";

    
}

const showwinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        console.log("you win");
        msg.innerText = `Hurray! you win ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        you.innerText = userscore;
    }
    else{
        console.log("computer wins");
        msg.innerText = `Oops! you lost ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        opp.innerText = compscore;
    }
};

const playgame = (userchoice) =>{
    console.log("userchoice = ",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice = ",compchoice);

    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //paper, scissors
            userwin = compchoice === "paper"?false : true;
        }
        if(userchoice === "paper"){
            //rock, scissors
            userwin = compchoice === "scissors"?false : true;
        }else{
            //rock, paper
            userwin = compchoice === "rock"? false : true; 
        }
        showwinner(userwin,userchoice,compchoice);
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});

res.addEventListener("click",playrepeat);