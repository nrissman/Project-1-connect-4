//grab the s divs or the div "board"  and turn them into an array or loop over them some how

let currentPlayer = 1
let turns = 0
//grabbing the "board" divs
const slot = document.getElementsByClassName("slot")
//looping the "s" divs to making them clickable 
for (let i = 0; i < slot.length; i++) {
    slot[i].onclick = () => {
        if (currentPlayer === 1) {
            document.getElementById("currentPlayer").innerHTML = "Yellows Turn"
            slot[i].classList.add('taken')
            slot[i].classList.add('player-red')
            currentPlayer = 2
            turns = turns += 1 
            console.log(turns)
        }   else if (currentPlayer === 2){
                document.getElementById("currentPlayer").innerHTML = "Reds Turn"
                slot[i].classList.add('taken')
            slot[i].classList.add('player-yellow')
                currentPlayer = 1
                turns = turns += 1
                console.log(turns)
            }
    }
}

if (turns === 42) {
    document.getElementById("winner").innerText = "It's a Tie. Click Reset to play again!"
    console.log('its a tie')
}
restart.addEventListener("click", function (event){
    location.reload()
})






















//let button = document.getElementById("flip");
//let result = document.getElementById("result");
//function fnClick(event) {
//     let num = Math.random();

//     if (num < 0.5) {
//       result.innerHTML = "RED";
//     } else {
//       result.innerHTML = "YELLOW";
//     }
//   }



//   button.addEventListener("click", fnClick);