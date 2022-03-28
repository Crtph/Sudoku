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
"1----7-9-",
"-3--2---8", 
"--96--5--", 
"--53--9--", 
"-1--8---2", 
"6----4---", 
"3------1-", 
"-4------7", 
"--7---3--" 
];

var solution = [
"162857493",
"534129678",
"789643521",
"475312986",
"913586742",
"628794135",
"356478219",
"241935867",
"897261354"
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
        
         this.innerText = numSelected.id;
         win += 1;

      }
      else {
         ereurs += 1;
         document.querySelector("#errors").innerText = ereurs;
      }
      if (win == 58) {
         fireworks.start();  
      }
   }
}
function verify () {
   if (solution == board) {
      console.log("ok");
   }
   
}