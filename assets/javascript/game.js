var myAlphabets = ["a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var guessedLetters = [];
var letterToGuess = null;
var guessesLeft = 9;
var wins = 0;
var losses = 0;
var ComputerChoice
var userChoice = prompt("What is your guess?");

var computerChoice = Math.floor(Math.random() * myAlphabets.length);

for(i=0;i <10; i++){
  console.log(i+1);



if(userChoice == computerChoice){
    alert("Your guess was correct!");
    //break;
     }
     else{
      alert("Sorry, Try again");     
    }

}
document.getElementById("winners").innerHTML = "Wins" + wins;
  
document.getElementById("losers").innerHTML = "losers" + losses;
  

  
  //document.onkeyup = function(event) {
        // Lowercase the letter
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
