const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// 칼라의arrays. 
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // console.log(document.body);
    // get random number bettwen 0 - 3
    const randomNumber = getRamndomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRamndomNumber(){
    return Math.floor(Math.random() * colors.length);
}