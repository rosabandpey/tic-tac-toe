var gameContainer=document.querySelector("section div");
let turn;
let button=document.querySelector("button");
let selectedCell;
var gameStatus=document.getElementsByClassName('game--status');
gameStatus[0].innerHTML="It's X's turn";
let myArray=["","","","","","","","",""];
var found=[];
let winX=0;
let winO=0;
let a,b,c;
let roundWon=false;
const winArray=[
    [0,4,8],
    [2,4,6],
    [0,1,2],
    [3,4,5],
    [6,7,8], 
    [0,3,6],
    [2,5,8], 
    [1,4,7]
]
gameContainer.onclick=function(event){
    let cell=event.target;
    xo(cell);
}

function xo(xo){
    if(roundWon==false){
        selectedCell=xo;
        let index=xo.getAttribute("data-cell-index");
        if (myArray[index]==""){
            if( (turn==1 )){
    
                selectedCell.innerHTML="O";
                turn=0;
                gameStatus[0].innerHTML="It's X's turn";
                myArray[index]=(selectedCell.innerHTML);
                
            }else
             {
                selectedCell.innerHTML="X";
                turn=1;
                gameStatus[0].innerHTML="It's O's turn";
                myArray[index]=(selectedCell.innerHTML);
             }
             
            } 
            checkWin();
    }
    
}

function checkWin(){

    winArray.forEach((arr)=>{
        if(roundWon==false){
            console.log(roundWon)
        
            a = arr[0];
            b = arr[1];
            c = arr[2];
        
         if (myArray[a] === '' || myArray[b] === '' || myArray[c] === '') {
             return true;
          }
        console.log(myArray[a],myArray[b],myArray[c])
         if (myArray[a] === myArray[b] && myArray[b] === myArray[c]) {
            if (myArray[a]=="X" && myArray[b]=="X" && myArray[c]=="X"){
                gameStatus[0].innerHTML="Player X has won";
                roundWon = true;
                return true;
         }else if(myArray[a]=="O" && myArray[b]=="O" && myArray[c]=="O"){
                gameStatus[0].innerHTML="Player O has won";
                roundWon = true;
                return true;
         }
         selectedCell.innerHTML="";
        }
        
  if (myArray.includes("")){
    return true;
}else{
    gameStatus[0].innerHTML="Game ended in a draw";
    roundWon = true;
    return true;
}

    }})
}

  

button.onclick=function(){
    let childCell=gameContainer.children;
    for (const iterator of childCell) {
        iterator.innerHTML="";
    }
    for (let index = 0; index < myArray.length; ++index) {
        myArray[index]="";
    }
    turn=0;
    gameStatus[0].innerHTML="It's X's turn";
    console.log(myArray);
    roundWon=false;
}

    
