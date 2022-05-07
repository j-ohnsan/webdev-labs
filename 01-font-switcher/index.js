let divContentFontSize = 22.4;
let h1FontSize = 32;

const makeBigger = () => {
   // alert('make bigger!');
   divContentFontSize++;
   h1FontSize++;
   document.querySelector("div.content").style.fontSize = `${divContentFontSize}px`;
   document.querySelector("h1").style.fontSize = `${h1FontSize }px`;
};

const makeSmaller = () => {
   // alert('make smaller!');
   divContentFontSize -= 1;
   h1FontSize  -= 1;
   document.querySelector("div.content").style.fontSize = `${divContentFontSize}px`;
   document.querySelector("h1").style.fontSize = `${h1FontSize }px`;
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
