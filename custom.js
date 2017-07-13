var painted;
var content;
var winningCombinations;
var theCanvas; 
var c;
var cxt;
var w;
var y;
    
    var turn = 0;
    var squaresFilled = 0;
    



    
    



window.onload = function(){
    
    painted = new Array();
    content = new Array();
    
    winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
    
    for(var i=0; i<=8; i++){
        painted[i] = false;
        content[i]=false;
    }
    }


function canvasClicked(number){
    
    playerXIndication = document.getElementById('xturn');
    
    playerOIndication = document.getElementById('oturn');
    
    theCanvas = "div" + number;
    c = document.getElementById(theCanvas);
    
    if(painted[number-1]==false){
        if(turn%2==0){
          playerOIndication.style.visibility = '';
            playerXIndication.style.visibility = "hidden";
            
            
            c.innerHTML = '<img src="images/red%20x.jpg" alt="x" width=100% height=100%>';
            content[number-1] = 'X';
        }else{
           playerOIndication.style.visibility = 'hidden';
            playerXIndication.style.visibility = "";
            
            c.innerHTML = '<img src="images/red%20o.jpg" height="100%" width="100%" alt="O">';
            content[number-1] = 'O';
        }
    }
    else{
        alert('This block is already occupied, try another block');
        turn--;
        squaresFilled--;
    }
    turn++;
    painted[number-1]= true;
    squaresFilled++;
    checkForWinner(content[number-1]);
    
   
}

function checkForWinner(symbol){
    
    for(var a = 0; a < winningCombinations.length; a++){

        if(content[winningCombinations[a][0]-1]==symbol && content[winningCombinations[a][1]-1]==symbol && content[winningCombinations[a][2]-1]==symbol){
            alert(symbol + ' won!!');
            playAgain();
        }
        
    }
     if(squaresFilled == 9){
        alert('It is a TIE');
        playAgain();
    }
}
    function playAgain(){
        y=confirm("PLAY AGAIN?");
        if(y==true){
            location.reload(true);
        }else{
            alert('Good Bye Then!!');
        }
    }
    
    
