const dice= document.getElementById('dice-btn');

function dicegame(){
    //dice 1 
    var randomDice = Math.floor((Math.random()*6+1));
    var dicelocation = "images/" + "D-"+ randomDice +".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src",dicelocation)

    //dice 2 
    var randomDice2 = Math.floor((Math.random()*6+1));
    var dicelocation2 = "images/" + "D-"+ randomDice2 +".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src",dicelocation2)

    if(randomDice> randomDice2){
        document.querySelector("h1").innerHTML ="🏆 Player 1 wins ! 🏆"
    }else if(randomDice2> randomDice){
        document.querySelector("h1").innerHTML ="🏆 Player 2 wins ! 🏆"
    }else {
        document.querySelector("h1").innerHTML ="🏆 Match Draw 🏆"
    }

    //button text change
    dice.innerHTML= "Hell Yeah, Hit Again"
}