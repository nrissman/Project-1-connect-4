//grab the s divs or the div "board"  and turn them into an array or loop over them some how
// -game loads 
//// -rules and objectives display on screen out of the way of gameplay (maybe you click a button that links to them)
// -player clicks coin flip to receive color (red always goes first)
// -can only select slots that are directly above taken slots (i.e you can’t have floating pieces)
// -player one selects slot 
// -token appears and slot becomes “taken” (can’t play on taken slots)
// -Player turn indicator changes 
// -player two selects slot
// -token appears and slot becomes taken
// -if four of the same players pieces are detected in a row that player wins 
// -the four winning pieces are highlighted  and a win message is displayed
// -if all 42 pieces are played with no winner the game ends in a tie and a tie message is displayed

//make 42 slots in that container and grab them//
//make them clickable 
//write functions to apply to each slot
//apply color to the clicked slots 
//make them unclickable once clicked 
//player one 
//player two

//selectors
//make a container and grab it 
const board = document.querySelector('.board')
//this will alow us tho alternate whos turn it is
let playerColor = document.querySelector('.color')
//grabbing the winner tag
const result = document.querySelector('#result')
let coinFlip = document.getElementById('coinFlip')
let coinResult = document.getElementById('coinResult')
let cantPlay = document.getElementById('cantPlay')
let turns = 1
let currentPlayer = 1
let winningArrays = [ 
    [0, 1, 2, 3], [41, 40, 39, 38],[7, 8, 9, 10], 
    [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], 
    [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], 
    [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], 
    [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], 
    [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], 
    [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], 
    [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], 
    [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], 
    [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], 
    [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], 
    [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], 
    [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], 
    [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], 
    [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], 
    [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], 
    [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], 
    [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9],
    [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], 
    [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], 
    [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], 
    [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], 
    [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34] 
];

document.addEventListener('DOMContentLoaded', loadGame)

function loadGame () {
    //making the board
    makeBoard()
    //calling the inner html to signal whos turn it is 
    playerColor.innerHTML=currentPlayer
    //renaming divs 'spot'
    let spots= document.querySelectorAll('.board div')
    //creating an array from newly formed 'spot' variable
    Array.from(spots).forEach(spots=>{
        //applying a click function to all 'spot's
        spots.addEventListener('click', clickSpot)
    })

}

        //making the board
const makeBoard = () => {
        //create 42 spots
    for (let i = 0; i < 42; i++){
        //create a div for every spot 
        let div = document.createElement('div')
        // giving the div a data set for later use
        div.setAttribute('data-id', i)
        div.setAttribute('data-avail', false)
        //add the class of spot to newly created div
        div.classList.add('spots')
        //setting the bottom 7 spots class to 'available'
        if (i>=35){
            div.setAttribute('data-avail', true)            
        }
        //console.log("the div created", div)
        //add spots to the board
        board.appendChild(div)
    }
}       
    //giving the spot a click function
function clickSpot(e){
    //console.log('this is the spot: dataset', e.target.dataset)
    const available = e.target.dataset.avail === 'true' ? true : false
    let spotAboveId = (e.target.dataset.id - 7)
    //console.log(spotAboveId)
    //console.log(e.target.dataset.avail)
   // console.log('available?', available)
    //needs to grab all the divs and make them selectable
    let spots = document.querySelectorAll('.board div') 
    let select = parseInt(this.dataset.id) 
    if (available) {
        //console.log('this spot is available')
        if(currentPlayer===1){  
            //changes player turn 
            document.getElementById('player').innerHTML = 'Blues Turn'
            //adds color with css player color
            this.className='red-player'
            //switches player turn
            currentPlayer=2
            //makes spot unclickable
            e.target.dataset.avail = 'false' 
            console.log(e.target.dataset)
            document.getElementById('cantPlay').innerHTML =''
        } else if(currentPlayer === 2){  
            document.getElementById("player").innerHTML = 'Reds Turn'
            this.className="blue-player" 
            currentPlayer=1 
            e.target.dataset.avail = 'false' 
            document.getElementById('cantPlay').innerHTML =''
        } if (spotAboveId>=0){
            const spotAbove = document.querySelector(`[data-id="${spotAboveId}"]`)            
            spotAbove.dataset.avail = 'true'
            
        } 
        
    } else document.getElementById('cantPlay').innerHTML = 'Cant go here, try somewhere else'
    checkWin()    
    turns = turns +1
    //console.log('spot not available try somewhere else')
        
        
}




function checkWin() {
    let spots = document.querySelectorAll('.board div')
    for (let y = 0; y < winningArrays.length; y++) {
        const spot1 = spots[winningArrays[y][0]]
        const spot2 = spots[winningArrays[y][1]]
        const spot3 = spots[winningArrays[y][2]]
        const spot4 = spots[winningArrays[y][3]]
        
        //check those squares to see if they all have the class of player-Red
        if (
            spot1.classList.contains('red-player') &&
            spot2.classList.contains('red-player') &&
            spot3.classList.contains('red-player') &&
            spot4.classList.contains('red-player')
            )
        {
            document.getElementById('winMsg').innerHTML = 'GAME OVER, RED PLAYER WINS! CLICK RESET!'
            document.getElementById("player").innerHTML = ''
            winningArrays=
            //result.innerHTML = 'Red Player Wins! Click reset to play again!'
            endGame()
            
        }
        //check those squares to see if they all have the class of player-Yellow
        if (
            spot1.classList.contains('blue-player') &&
            spot2.classList.contains('blue-player') &&
            spot3.classList.contains('blue-player') &&
            spot4.classList.contains('blue-player')
            )
        {
            document.getElementById('winMsg').innerHTML = 'GAME OVER, BLUE PLAYER WINS! CLICK RESET!'
            document.getElementById("player").innerHTML = ''
            endGame()
            // result.innerHTML = 'Blue Player Wins! Click reset to play again!'
        }
        if (turns === 42) {
            result.innerHTML = "It's a Tie. Click Reset Game to play again!"
        }       
    }
}
    
function endGame(){
    let spots = document.querySelectorAll('.board div')
    for (let i = 0; i < spots.length; i++) {
        spots[i].removeEventListener('click', clickSpot)
        
    }
}

function flip(event) {
    let num = Math.random();
    if (num < 0.5) {
        coinResult.innerHTML = 'You are Red';
    } else {
        coinResult.innerHTML = 'You are Blue';
    }
}

coinFlip.addEventListener("click", flip);

restart.addEventListener('click', function (event){
    location.reload()
})
