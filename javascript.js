function e (n){
    let container = document.querySelector('.container');
    let restartBtn =  document.querySelector('.restart');
    let erazerBtn = document.querySelector('.erazer');
    let rainbowModeBtn = document.querySelector('.rainbow');
    let solidbtn = document.querySelector('.solid');
    for (let i=0 ; i<n*n ; i++) {
        let square = document.createElement('div');
        square.classList.add('square')
        square.addEventListener('mouseenter',rainbow);
        container.appendChild(square);
        };
    container.style.cssText =`grid-Template-columns: repeat(${n} , 1fr); , grid-Template-Rows : repeat(${n} , 1fr);`;
    restartBtn.addEventListener('click',restart);
    erazerBtn.addEventListener('click',erazerFun);
    rainbowModeBtn.addEventListener('click',rainbowfun);
    solidbtn.addEventListener('click',solidFun);
 };
 function restart(){
   let squares = document.querySelectorAll('.square');
   squares.forEach(e => e.remove());
   let numsquares = prompt("choose the number of squares per side(100 or less):", );
   e(numsquares);
 }
 function rainbow (){
        let x = Math.floor(Math.random() * (256 - 0 + 1)) + 0;
        let y = Math.floor(Math.random() * (256 - 0 + 1)) + 0;
        let z = Math.floor(Math.random() * (256 - 0 + 1)) + 0;
        this.style.cssText = `background-color: rgb(${x},${y},${z});`; 
}
 function erazerFun() {
    let squares =document.querySelectorAll('.square');
    squares.forEach((e)=>{
     e.addEventListener('mouseenter',changeColor)
    })
 }
 function rainbowfun() {
    let squares =document.querySelectorAll('.square');
    squares.forEach((e)=>{
     e.removeEventListener('mouseenter',changeColor);
     e.removeEventListener('mouseenter',chooseColor);
     e.addEventListener('mouseenter',rainbow);
 })
}
function changeColor () {
    this.style.cssText = "background-color = white";
}
function solidFun () {
    let squares =document.querySelectorAll('.square');
    squares.forEach((e)=>{
     e.addEventListener('mouseenter',chooseColor);
     e.removeEventListener('mouseenter',changeColor);
 })
}
function chooseColor() {
    let color = document.getElementById("colorpicker").value;
    this.style.cssText = `background-color: ${color};`;
}
  e(16);

