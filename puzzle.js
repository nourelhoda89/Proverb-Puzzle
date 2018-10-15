 
 var proverbs = ["The pen is mightier than the sword",
				"People who live in glass houses should not throw stones",
				"Hope for the best but prepare for the worst",
				"Better late than never",
				"Birds of a feather flock together",
				"The early bird catches the worm",
				"God helps those who help themselves",
				"Cleanliness is next to godliness",
				"Actions speak louder than words",
				"Practice makes perfect",
				"There's no time like the present",
				"Beauty is in the eye of the beholder",
				"Do unto others as you would have them do unto you",
				"Honesty is the best policy",
				"If you're not part of the solution you're part of the problem",
				"Misery loves company",
				"Still waters run deep",
				"A person is known by the company he keeps",
				"Absence makes the heart grow fonder",
				"Home is where the heart is"];
 var randProv= proverbs[Math.floor(Math.random() * 20)]; 
 var provLength=randProv.length; //stores the length of the array
 var allowed=2, giveUp=0, count=0,totalCells=100,userGuess='';

/* have the content filled
character-by-character in the cells of the table (once character per cell). Set
the initial visibility of the characters as hidden (Hint: you may define each
cell as a button to make it responsible to the onclick event). Unoccupied
cells must be displayed in relatively lighter color to look different from
occupied cells*/

function fillCells(){
    
    for (var i = 1; i < totalCells+1; i++) {
    	var value = randProv[i - 1];
        var currentCell = document.getElementById(i);
        //for an emppty cell
        if (value.length == 0 || value == ' '){
        	currentCell.style.backgroundColor = "black";
            if(value== ' ')
                provLength--;
        }
        else {
            if(giveUp==1){
                currentCell.innerHTML =value;
            }
            else{
                currentCell.innerHTML = ' ';
            }
             
            currentCell.style.backgroundColor = "#0000FF";
        }
    }
    
}

/*Allow a user to reveal (flip) one letter by each click, and limit the revealed
cells to a half of the total number of occupied cells. */
function flip(number){
	var maxTurns= Math.round(provLength/2);
	if(count < maxTurns && number<=randProv.length){
	   document.getElementById(number).innerHTML=randProv[number-1];
	   displayStat();
	   count++;
	}else if(count >= maxTurns && giveUp!=1){
 		alert("You have reached your max flips! Please make a guess!");
 		showTextArea();

	}

}

function  displayStat(){
	 document.getElementById("track").innerHTML="Max flips: "+ Math.round(provLength/2) +"<br> Guess Count:"+count;

}
/*show the text area when the button is pressed*/
function showTextArea() {
	/*var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("id", "userGuess");
    document.getElementById("answer").appendChild(x);
    var elem = document.getElementById('guess');
    elem.parentNode.removeChild(elem);

    var btn = document.createElement("BUTTON");
    btn.setAttribute("type", "button");
    btn.setAttribute("id", "check");
    document.getElementById("answer").appendChild(btn);
    btn.innerHTML="Check"; 
    document.getElementById("check").onclick=function() {check()};*/
	document.getElementById("answer").innerHTML =  "<button onclick= \"checkSubmition()\">Check</button>"+" "+
	                                                 "<input type=\"text\"  name=\"guess\"></input>";
	                                               
}

function checkSubmition(){
	var score= Math.round(provLength/2)- count +1;
	var userGuess=document.getElementsByName("guess")[0].value;
	if (randProv.toLowerCase() == userGuess.toLowerCase()) {
        alert("Correct! The proverb was: '" + randProv + "'.\nYou are a " + score + "-star guesser!");
       window.location.reload();
    }
    else if (allowed == 2) {
            alert("Sorry! That is incorrect, you have " + allowed + " more guesses");
            document.getElementById("answer").innerHTML += "<button onclick=\"reveal()\">Give Up!</button>";
            allowed--;
    }
    else if (allowed== 1) {
            alert("Sorry! That is incorrect, you have " + allowed+ " more guess");
            allowed--;
    }
    else {
        
        alert("Sorry! you Lost!");
        reveal();
           
    }
}
function reveal(){
    document.getElementById("answer").innerHTML = "The Proverb is revealed! <button onClick=\'window.location.reload()\'>Guess another proverb</button>";
    giveUp=1;
    fillCells();
}
    

    
    