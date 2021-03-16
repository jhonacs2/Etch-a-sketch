const main = document.querySelector('#main');
const changueSize = document.querySelector('#changueS');

window.addEventListener("load", createGrid());


//changue the size of the grid
changueSize.addEventListener('click', () => {
    const mainArray = Array.from(main.childNodes);
    mainArray.forEach((element) => {main.removeChild(element)});

    createGrid(Number(prompt('Insert the Number',2)));
    
});

//this function create a random number for color grid
function changueColor(){
    let randomNumber = Math.floor(Math.random() * (256 - 1 + 1)) + 1;
    return randomNumber;
}
//the logic of the grid was created in a few words
//size of the grid
function createGrid(size = 4) {
    
    if ( size > 64 || isNaN(size)) return alert('the number has to be less than 64');
    
    for (let i = 0 ; i<size*size; i++){
    const createDivs = document.createElement('div');
    createDivs.style.width = `${(100/size)-0.4}%`;
    createDivs.classList.add('grid');
    main.appendChild(createDivs);
}
    mouseOver();
}

//fuction changue the color of the div when the mouse is over
function mouseOver (){
    const selectDivs  = document.querySelectorAll('.main > div');
    
    selectDivs.forEach( divs => divs.addEventListener('mouseover',function(e){
        divs.style.background = `rgb(${changueColor()}, ${changueColor()}, ${changueColor()})`;
}))};
    
    



















