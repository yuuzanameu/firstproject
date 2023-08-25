
let tiles = [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let prevmove = 'O';

var keks = document.querySelectorAll('.kek');

function startvalues(){
    for (let a = 1; a < 10; a++){
        document.querySelector(`.t${a}`).textContent = ".";
    }
}

startvalues();

let disableall = function(){
    keks.forEach(function(kek) {
        if (kek.classList.contains('unused')){
            kek.classList.remove('unused');
        }
    });
}


let mariowin = function(){
    var audio = document.getElementById("mariowin");
    audio.play();
}

let mariojump = function(){
    var audio = document.getElementById("mariojump");
    audio.play();
}

let invalidmove = function(){
    var audio = document.getElementById('invalid');
    audio.play();
}


let Xwon = function(){
    document.querySelector('.X').classList.remove('hidden');
    disableall();
    mariowin();
}


let Owon = function(){
    document.querySelector('.O').classList.remove('hidden');
    disableall();
    mariowin();
}


function winnerwho(tiles){
    let a = 0;
     
    a = tiles[1] + tiles[5] + tiles[9]
    if(a == 'XXX') {return Xwon();} 
    else if (a == 'OOO') return Owon();
    
    a = tiles[3] + tiles[5] + tiles[7]
    if(a == 'XXX') {return Xwon();} 
    else if (a == 'OOO') return Owon();

    for(let i = 1; i <= 7; i = i + 3){
       a = tiles[i] + tiles[i + 1] + tiles[i + 2];
       if(a == 'XXX'){
           return Xwon();
       } else if (a == 'OOO') return Owon();
    }

    for(let j = 1; j <= 3; j++){
       a = tiles[j] + tiles[j + 3] + tiles[j + 6];
       if(a == 'XXX'){
           return Xwon();
       } else if (a == 'OOO') return Owon();
    }
}


let tap = function(i){
    if (document.querySelector(`.t${i}`).classList.contains("unused")){
      let element = document.querySelector(`.t${i}`);
      if (prevmove == 'O'){
          element.textContent = "X";
          prevmove = 'X';
          tiles[i] = 'X';
      }
      else if (prevmove == 'X'){
          element.textContent = "O";
          prevmove = 'O';
          tiles[i] = 'O';
      }
      element.classList.remove("unclicked");    
      element.classList.add("clicked");
      element.classList.remove("unused");
      mariojump();
      winnerwho(tiles);
      console.log(tiles);
    } else invalidmove();
}


function button_functionality(){ 
    for (let i = 1; i <= 9; i++) {
        document.querySelector(`.t${i}`).addEventListener("click", function() {
            tap(i);
        });
    }
}


button_functionality();


