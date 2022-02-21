var marray = ['~', '!', '@', '#', '$', ':', '%', '^', '&', '*', '(', ')', '~', '!', '@', '#', '$', ':', '%', '^', '&', '*', '(', ')'];
var shuffled_array = [];
var tiles_flipped = 0;
var flipped_values = [];
var flipped_values_id = [];
const maxtime = 300;
const maxmoves = 300;

function shuffle(array) {
    let copy = [], n = array.length;
    while (n) {
        let i = Math.floor(Math.random() * array.length);
        copy.push(array[i]);
        array.splice(i, 1);
        n--;
    }
    console.log(copy);
    return copy;
}

function newGame() {
    console.log("working");
    document.getElementById('start').style.display = 'none';

    document.getElementById('memory').style.display = 'block';
    document.getElementById('timer').style.display = 'block';

    document.getElementById('moves').innerHTML = 0;
    document.getElementById('time').innerHTML = maxtime;

    shuffled_array = shuffle(marray);

    let insert = '';
    for (let i = 0; i < shuffled_array.length; i++) {
        insert += `<div id="tile_${i}" onclick=" flipTile (this, '${shuffled_array[i]}')"></div>`;
    }
    document.getElementById('memory').innerHTML = insert;
}

function flipTile(tile, val) {
    if (tile.innerHTML == '' && flipped_values.length < 2) {
        let currMoves = parseInt(document.getElementById('moves').innerHTML);
        document.getElementById('moves').innerHTML = currMoves + 1;
        tile.style.background = "white";
        tile.innerHTML = val;
        if (flipped_values.length == 0) {
            flipped_values.push(val);
            flipped_values_id.push(tile.id);
        }
        else if (flipped_values.length == 1) {
            flipped_values.push(val);
            flipped_values_id.push(tile.id);
            if (flipped_values[0] == flipped_values[1]) {
                tiles_flipped += 2;

            }
            else {
                
                setTimeout(flip,2000);
            }
            flipped_values = [];
            flipped_values_id = [];
        }
    }
}
function flip(){
    console.log("Flipback");
    document.getElementById(flipped_values_id[0]).style.background = null;
    document.getElementById(flipped_values_id[0]).innerHTML = "";
    document.getElementById(flipped_values_id[1]).style.background = null;
    document.getElementById(flipped_values_id[1]).innerHTML = "";
}

