// dice.js

function rolldices() {
  let diceSidesSelect = document.getElementById("dicesides");
  let diceSides = parseInt(diceSidesSelect.value, 10);

  let randomNumber = Math.floor(Math.random() * diceSides) + 1;
  alert(
    "You rolled a " + randomNumber + " on the " + diceSides + " sided dice!"
  );
}
