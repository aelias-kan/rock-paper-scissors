# Rock-Paper-Scissors
A browser-based Rock-Paper-Scissors game. This project transitions the classic game from a browser console application into a dynamic, state-driven User Interface.
## 🎮 Live Demo
[Play the game live on GitHub Pages](https://aelias-kan.github.io/rock-paper-scissors/) 

Best of 5 Tournament: Implements a strict 5-round sequence. The final champion is calculated and crowned immediately on the 5th click.
State-Lock Gatekeeper: Once the 5th round concludes, the gameplay engine dynamically freezes inputs to prevent score tampering until "Play Again" is selected.
Dynamic Scoreboard: Real-time DOM manipulation tracks user wins, computer wins, and draws simultaneously.
Event Delegation: Leverages a unified event listener on the container element using `.closest()` for optimized DOM performance.

The core engine relies on a synchronous, sequential state evaluation. Instead of decoupling the scoring and the match-termination checks, the application captures state variables downstream of the point allocation:

Event Capture: User inputs are processed by evaluating data attributes (`data-choice`) mapped within a `switch` configuration.
Gatekeeper Condition: Inside the engine, an evaluation gate enforces bounds checking:
  ```javascript
  if (roundCounter < 5) { // Processes actions exclusively for steps 1-5 }