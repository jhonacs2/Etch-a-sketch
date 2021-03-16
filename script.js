const main = document.querySelector('#main');
let size = 2;



//the logic of the grid was created in a few words
//size of th grid 
for (let i = 0 ; i<size*size; i++){
    const createDivs = document.createElement('div');
    createDivs.style.width = `${(100/size)-0.4}%`;
    createDivs.classList.add('grid');
    main.appendChild(createDivs);
    console.log(i);
}