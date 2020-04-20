
document.addEventListener('DOMContentLoaded', function(event) {

var rellax = new Rellax('.rellax');

new Glide('.glide').mount()

});


function rotateCards() {

}



var card1 = document.getElementById("card1");

var randomSpeed1 = Math.random() * 4;
var randomSpeed2 = Math.random() * 4;
var randomSpeed3 = Math.random() * 4;
var randomSpeed4 = Math.random() * 4;


let cardJson = [
  {
    "card_face" : ["ace.png", "two.png", "five.png", "seven.png"],
    "card_back" : "back.png"
  }
]

var face = cardJson['card_back'];
var back = cardJson['card_face'];
var cardPicker = Math.floor(Math.random() * 2);

function cardChooser() {
  var face = cardJson['card_back'];
  var back = cardJson['card_face'];
  var cardPicker = Math.floor(Math.random() * 2);

  if (cardPicker == 1) {
    console.log("face");
    return "face"
  }
  else if (cardPicker == 2) {
    console.log("back");
    return "back"
  }
}

cardChooser()

// let cardChooser = Math.floor(Math.random() * 4);


var cardDiv = document.getElementById("cardDeck");

let newCard = document.createElement("IMG");
newCard.classList.add("card1");
newCard.src = "back.png";
// cardDiv.appendChild(newCard);

// console.log(cardJson["card_back"])


// $(document).ready(function(){
//   $('.part1Carousel').slick({
//     setting-name: setting-value
//   });
// });

var videoBackground = document.getElementById("videoBackground");

let newVideo = document.createElement("VIDEO");
let newSource = document.createElement("SOURCE");
newSource.classList.add("video1");
newSource.src = "https://youtu.be/yUDc78znrLM";
newVideo.appendChild(newSource);
videoBackground.appendChild(newVideo);
