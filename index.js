

var randomNumber1=Math.random();
randomNumber1 =Math.floor(randomNumber1*6)+1;
var diceImage= "dice"+randomNumber1+".png";
var diceSrc="images/"+diceImage;
document.querySelector(".img1").setAttribute("src",diceSrc);

var randomNumber2=Math.random();
randomNumber2 =Math.floor(randomNumber2*6)+1;
var diceImage1= "dice"+randomNumber2+".png";
var diceSrc1="images/"+diceImage1;
document.querySelector(".img2").setAttribute("src",diceSrc1);
if(randomNumber2>randomNumber1){
  document.querySelector("h1").textContent="Player 2 wins!";
}
else if(randomNumber2<randomNumber1){
  document.querySelector("h1").textContent="Player 1 wins!";

}
else{
  document.querySelector("h1").textContent="Tie!";

}