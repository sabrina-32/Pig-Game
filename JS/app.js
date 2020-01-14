



var scorers, roundScore, activePlayer;

scores = [0,0];
roundScore =0;
activePlayer  =0;


document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

 

document.querySelector('.btn-roll').addEventListener('click',  function(){
    //  1. random num,

  var  dice = Math.floor(Math.random()*6)+1;


// 2. display  the  result

var diceDOM = document.querySelector('.dice');

diceDOM.style.display = 'block';
diceDOM.src = 'dice-' + dice + '.png';





//3. update the round score if  the rolled  num was  not  a 1

if(dice !== 1){

    //add  score

    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;


}
else{
    //next player

    activePlayer ===0 ? activePlayer =1 : activePlayer =0;
    roundScore = 0;
     
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
   document.querySelector('.dice').style.display = 'none';
   


  //  document.querySelector('.player-0-panel').classList.remove('active');
 //document.querySelector('.player-1-panel').classList.add('active');
     


}





});



//document.querySelector('#current-' + activePlayer).textContent = dice;

// var x = document.querySelector('#score-0').textContent;

// console.log(x);
