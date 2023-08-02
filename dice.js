// dice.js

//function rolldices() {
//let diceSidesSelect = document.getElementById("dicesides");
//let diceSides = parseInt(diceSidesSelect.value, 10);

//let randomNumber = Math.floor(Math.random() * diceSides) + 1;
// document.getElementById("diceface").innerHTML = dicefase;}

function rolldices() {
  let diceSidesSelect = document.getElementById("dicesides");
  let diceSides = parseInt(diceSidesSelect.value, 10);

  let randomNumber = Math.floor(Math.random() * diceSides) + 1;
  document.getElementById("diceface").innerHTML = randomNumber; // Display the result
}
