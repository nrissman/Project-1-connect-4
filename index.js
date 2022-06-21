//grab the s divs or the div "board"  and turn them into an array or loop over them some how

let currentPlayer = 1

//grabbing the "board" divs
const slot = document.getElementsByClassName("slot")
//looping the "s" divs to making them clickable 
for (let i = 0; i < slot.length; i++) {
    slot[i].onclick = () => {
        if (currentPlayer === 1) {
            document.getElementById("currentPlayer").innerHTML = "Yellows Turn"
            //slot.style.backgroundcolor = "red" //something to turn spot yellow or red
            currentPlayer = 2
            changebackground
            //console.log(slot[i])
        } else if (currentPlayer === 2){
            document.getElementById("currentPlayer").innerHTML = "Reds Turn"
            currentPlayer = 1
        }
    }
}
function changebackground(){
	document.getElementById('slot').style.backgroundColor = 'green' ;
}

restart.addEventListener("click", function (event){
    location.reload()
})



//get element by id'slot', if



















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