console.log("Welcome to Rock Paper Scissors Game");
console.log('#Instructions to start playing type play("rock OR paper OR scissor"); ');
const Game = ["rock","paper","scissor"];
let compWinCounter =0;
let userWinCounter =0;
let draw =0;
function play(choice)
{
    
    let user_choice = choice.toLowerCase();
    let compIndex= generateCompChoice();
    let comp_choice = Game[compIndex];
    if (user_choice == "rock" || user_choice == "paper" || user_choice =="scissor")
    {
        playGame(user_choice,comp_choice);
    }    
    else
    {
        console.log("Invalid Entry! please enter either Rock/rock Paper/paper or Scissor/scissor")
    }

    return 'Round completed';
}

function playGame(user,comp)
{
    if (user == comp)
    {
        draw += 1;
        console.log("Its a draw");
    }
    else 
    {
        if (user == 'rock' && comp == 'scissor'|| user == 'paper' && comp == 'rock' || user == 'scissor' && comp == 'paper')
        { 
            userWinCounter +=1;
            console.log(`your ${user} beats comp's ${comp}`);
        }
        else 
        {
            compWinCounter +=1;
            console.log(`comp's ${comp} beats your ${user}`);
        }
    }
    console.log("Game Updates");
    console.log(`You won : ${userWinCounter}`);
    console.log(`Comp won : ${compWinCounter}`);
    console.log(`Draw : ${draw}`); 
}

function generateCompChoice() { return Math.floor(Math.random()*Game.length)};
