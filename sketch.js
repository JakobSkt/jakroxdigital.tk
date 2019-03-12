var w = window.innerWidth;
var h = window.innerHeight;
var randomNumber = "";
var guessedNumber = "";
const range = "Tallet er mellem 0 & ";
var failedTries = "";
const isStorage = 'undefined' !== typeof localStorage;


var slider = document.getElementById("myRange");
var output = document.getElementById("randomRange");

output.innerHTML = range + slider.value; 

slider.oninput = function() {
    output.innerHTML = range + this.value;

    var element = document.getElementById("answer");
    element.style.color = 'red';
    
    generateRandom();
    resetText();
    resetTries();
}

function setup() {
  generateRandom();
}

function draw() {
  guessedNumber = Number(document.getElementById('ghost-input').value);
}

function sliderRange() {
    range = randomRange
} 

function resetText() {
  document.getElementById('answer').innerHTML = "";
}

function resetTries() {
  failedTries = 0;
}

  function generateRandom() {
    var slideroutput = document.getElementById('myRange').value;
    randomNumber = round(random(0, slideroutput));
    console.log(randomNumber);
  }

  function preCheck() {
    var slideroutput = document.getElementById('myRange').value;
    checkNumberInitial(guessedNumber, slideroutput, randomNumber);
    
  }


  function checkNumberInitial(g, v, r) {
  if (g) {
    if (g >= 0 && g <= v) {
      if (g > v) {
      }
      if (g == r)
        {
        failedTries++;
        document.getElementById('answer').innerHTML = "Godt gættet! Du brugte " + failedTries.toString() + " forsøg";
        var element = document.getElementById("answer");
        element.style.color = 'green';
      } 

        else if (g > r)
        {
        document.getElementById('answer').innerHTML = "Prøv igen! Måske lidt lavere?";
        setTimeout(resetText, 2000);
        failedTries++;
        } 

        else if (g < r)
        {
        document.getElementById('answer').innerHTML = "Prøv igen! Måske lidt højere?";
        setTimeout(resetText, 2000);
        failedTries++;
      }
    }
      else 
      {
      window.alert("Tallet er uden for rækkevidden! Indtast et tal mellem 0 & " + v);
      failedTries++;
      }
    }  
    else 
    {    
    window.alert("Indtast et tal");
    console.log("Fejl! Indtal et tal");
    }
}