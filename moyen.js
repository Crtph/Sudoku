

const container = document.querySelector('.fireworks-container');
const fireworks = new Fireworks(container);

fireworks.start()
fireworks.pause()
fireworks.clear()

// stop and clear fireworks
fireworks.stop()

// after initialization you can change the fireworks parameters
fireworks.setOptions({ delay: { min: 10, max: 15 }})


   const options = {
     speed: 1
   }
 
   const style = {
     top: 0,
     left: 0,
     width: '100%',
     height: '100%',
     position: 'fixed',
     background: '#000'
   }
 

var numSelected = null;
var titleSelected = null;
let ereurs = 0;
let win = 0;

let board = [
"4--8-1---",
"-----3-5-",
"-5----21-",
"2---89-6-",
"----1----",
"-9-63---7",
"-49----7-",
"-1-3-----",
"---2-8--4"
];

var solution = [
   "426851739",
   "178923456",
   "953746218",
   "237489561",
   "684517923",
   "591632847",
   "849165372",
   "712394685",
   "365278194"
];




window.onload = function() {
   setGame();
}   
      
   function setGame() {
      for (r =0; r < 9; r++) {
         for(c = 0; c < 9; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
          
            if (board[r][c] != "-") {
               tile.innerText = board[r][c];
               tile.classList.add("tile-start")
            }
            if (r == 2 || r == 5) {
               tile.classList.add("ligne-horizontale");
            }
            if (c == 2 || c == 5 ){
               tile.classList.add("ligne-verticlale");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add('tile');
            document.getElementById("sudoku").appendChild(tile);  
         }
      }


  for (let i = 1; i<=9; i++) {
   let number = document.createElement('div');
   number.id = i
   number.innerText =  i;
   number.addEventListener("click", selectNumber);
   number.classList.add("number");
   document.getElementById("keyboard").appendChild(number);
}
   }
   
    




  
function selectNumber(){
   if (numSelected != null ){
      numSelected.classList.remove("number-selected");
      
   }
   numSelected = this;
   numSelected.classList.add("number-selected");
}
function selectTile() {
   if (numSelected){
      if (this.innerText != "" ){
         return;
      }
      let coords = this.id .split("-");
      let r = parseInt(coords[0]);
      let c = parseInt(coords[1]);

      if (solution[r][c] == numSelected.id) {
         win += 1;
         this.innerText = numSelected.id;

      }
      if (solution[r][c] != numSelected.id) {
         ereurs += 1;
         document.querySelector("#errors").innerText = ereurs;
      }
      if (win == 57) {
         fireworks.start();  
      }
   }
}