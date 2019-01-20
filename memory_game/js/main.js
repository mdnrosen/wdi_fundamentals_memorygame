


var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
}
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
}
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
}
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];


var cardsInPlay = [];
var checkForMatch = function (){};
var flipCard = function(cardId) {
	flipCard(0);
	flipCard(2);
console.log("User flipped " + cards[cardId].rank); 
cardsInPlay.push(cards[cardId].rank);

console.log("User flipped " + cardImage);
console.log("User flipped " + suit);


if (cardsInPlay.length === 2) 
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match");
} else {
	alert("Bad luck, try again.");
}


}; // flipcard function ends here

var createBoard = function ();
for (var i = 0; i <cardsInPlay.length; i++){
	cardElement.setAttribute('backOfCard','images/back.png');
	cardElement.setAttribute('data-id', i)
}



