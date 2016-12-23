/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//dice = Math.floor(Math.random() * 6) +1;
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;
//to interact with the webpage we first have to use document and use querySelelector to select the variable from the webpage and then manipulate it using textContext. 
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//innerHTML can manupulate HTML while textcontent can only put texy in it. 
document.querySelector('.dice').style.display='none';
//to interact with css we have to (.) operator here we have used dice class which is not an unique id but a class name in general. 

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
//getElementById is also a method like querySelector but it is a bit faster. 

document.querySelector('.btn-roll').addEventListener('click', function(){
    //1.Random Number
    var dice = Math.floor(Math.random() * 6) +1;
    
    //2.Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-' + dice + '.png';
    
    
    //3. Update the round score IF the rolled number was NOT a 1
    if(dice !== 1){
        //As we know that === does not do type coversion while == operator does type coversion. similarly we !== because we dont want type conversion
        //Add Score
        
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        //ternary operator.
        roundScore = 0;
        
        document.getElementById('current-0').textContent =0;
        document.getElementById('current-1').textContent =0;
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display='none';
        
    }
});