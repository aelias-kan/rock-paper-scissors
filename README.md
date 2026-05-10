# rock-paper-scissors
Rock Paper Scissors Console Edition
I built this simple Rock, Paper, Scissors game using HTML, CSS, and JavaScript. 
It’s a logic-based game where you play against a computer with random choice generator between rock paper scissor directly in your browser's console.

How to Play
Open index.html in your favorite browser.
Open the Developer Console
Right-click on the page and hit Inspect, then jump to the Console tab.
Quick Shortcut: Ctrl + Shift + J (Windows) or Cmd + Option + J (Mac).
Throw your move in the console,by typing eg play("rock") (You can also use "paper" or "scissor")
Check the Score: After each round, the console will show you who won and give you an updated scoreboard.
Type however you want: I made sure the game is case-insensitive. Whether you type "ROCK", "Rock", or "rock", it’ll work perfectly.

How I Built the Logic
I broke the code down into a few main steps to keep it organized
Handling input in the game takes whatever choice you type into the play() function.
I used JavaScript to convert all input to lowercase so typos in casing don't break the game.
I used Math.random() to let the computer pick a weapon from my array of choices.
I wrote a conditional logic block that compares our moves and decides if it’s a win, loss, or a draw.
Finally, the script logs the results and returns a status update so you know exactly where the score stands.
