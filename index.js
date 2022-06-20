//grab the s divs or the div "board"  and turn them into an array or loop over them some how
//maybe turn the s divs into a ul 

//

//grabbing the "board" div
const slots = document.getElementsByClassName('slot')
//let slots = board.getElementsByTagName('div') 
//possibly create  ul and append the "s"divs to it and loop through the ul 
for (let i = 0; i < slots.length; i++) {
    slots[i].onclick = () => {
        console.log("hello world")
    }
}


    //s1.addEventListener('click', function (event){
    // console.log("hello world")



document.addEventListener('DOMContentLoaded', () => {

})


restart.addEventListener('click', function (event){
    location.reload()
})