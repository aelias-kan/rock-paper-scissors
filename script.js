const main = document.querySelector('.main');

const message = document.querySelector('.message');
const your_score = document.querySelector('.yourScore');
const comp_score = document.querySelector('.compScore');
const draw_score = document.querySelector('.drawScore');

main.addEventListener('click',(item)=>
{
    const choiceBox = item.target.closest('.choice-box');
    if (!choiceBox) return;
    const playerChoice = choiceBox.dataset.choice;


    switch(playerChoice)
    {
        case 'rock':
            play('rock');
            break;
        case 'paper':
            play("Paper");
            break;
        case 'scissor':
            play("scissor")
            break;
        }
});

const Game = ["rock","paper","scissor"];
let compWinCounter =0;
let userWinCounter =0;
let draw =0;
let roundCounter = 0;
function play(choice)
{
    if (roundCounter<5)
    {
    let user_choice = choice.toLowerCase();
    let compIndex= generateCompChoice();
    let comp_choice = Game[compIndex];
    playGame(user_choice,comp_choice);

    }

}

function playGame(user,comp)
{
    roundCounter++;

    if (user == comp)
    {
        draw += 1;
        draw_score.textContent = draw;
        message.textContent = `Computer chose ${comp.toUpperCase()}!! its a draw!!`;
    }
    else 
    {
        if (user == 'rock' && comp == 'scissor'|| user == 'paper' && comp == 'rock' || user == 'scissor' && comp == 'paper')
        { 
            userWinCounter +=1;
            your_score.textContent = userWinCounter;
            message.textContent = `Computer chose ${comp.toUpperCase()}!! You won this round! ☺`;
        }
        else 
        {
            compWinCounter +=1;
            comp_score.textContent = compWinCounter; 
            message.textContent = `Computer chose ${comp.toUpperCase()}!! You lost this round! ㋡`;
        }
    }

    if (roundCounter === 5)
    {

        if(userWinCounter>compWinCounter)
        {
            message.textContent = " Congratulations you won!! ☺";
        }
        else if(compWinCounter>userWinCounter)
        {
            message.textContent = "You lose ㋡ Better luck next time!!"
        }
        else if (userWinCounter===compWinCounter)
        {
            message.textContent= "Draw !! play again!"
        }
    }
    }


function generateCompChoice() { return Math.floor(Math.random()*Game.length)};

const play_again = document.querySelector('.replay');
play_again.addEventListener('click', () =>
{
    roundCounter = 0;
    message.textContent = "Lets play again";
    comp_score.textContent = 0;
    your_score.textContent = 0;
    draw_score.textContent =0;
    userWinCounter =0;
    compWinCounter =0;
    draw =0;

})