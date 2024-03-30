const searchButton = document.querySelector('#searchButton');
const searchContainer = document.querySelector('#search-container');
const paragraph = document.querySelector('#paragraph');
const main = document.querySelector('main');
const aside = document.querySelector('aside');
const nav1 = document.querySelector('.nav-part-1');
const nav2 = document.querySelector('.nav-part-2');
const nav3 = document.querySelector('.nav-part-3');
const hamburger = document.querySelector('#hamburger');
const asideP = document.querySelectorAll('.aside-p');
const firstButton = document.querySelector('#first-button');
const lasttButton = document.querySelector('#last-button');
const lastButtonClose = document.querySelector('#last-button-close');

hamburger.addEventListener('click', () => {
    for (let j = 0; j < asideP.length; j++) {
        asideP[j].classList.toggle('hide');
    }
    hamburger.classList.add('active');
});

searchButton.addEventListener('focus', () => {
    searchButton.classList.remove('button-black');
    searchButton.classList.add('button-white');
    searchContainer.classList.remove('color-white');
    searchContainer.classList.add('color-black');
});

main.addEventListener('click', () => {
    hamburger.classList.remove('button-white');
    searchButton.classList.add('button-black');
    searchContainer.classList.remove('color-black');

    searchContainer.classList.add('color-white');
});

firstButton.addEventListener('click', () => {
    firstButton.classList.add('hide');
    lasttButton.classList.add('show');
});

lastButtonClose.addEventListener('click', ()=>{
    lasttButton.classList.remove('show');
    firstButton.classList.remove('hide');
});



// aside.addEventListener('click', () => {
//     searchButton.classList.add('button-black');
//     searchButton.classList.remove('button-white');
// });

// nav1.addEventListener('click', () => {
//     searchButton.classList.add('button-black');
//     searchButton.classList.remove('button-white');
// });

// nav2.addEventListener('click', () => {
//     hamburger.classList.remove('active');
// });

// nav3.addEventListener('click', () => {
//     searchButton.classList.add('button-black');
//     searchButton.classList.remove('button-white');
//     hamburger.classList.remove('active');
// });


