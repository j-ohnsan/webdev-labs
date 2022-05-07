/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeThemeToDefault = () => {
   // alert('default theme');
   document.querySelector(".container").className = "container default";
};

const changeThemeToDesert = () => {
   // alert('desert theme');
   document.querySelector(".container").className = "container desert";
};

const changeThemeToOcean = () => {
   //alert('ocean theme');
   document.querySelector(".container").className = "container ocean";
};

const changeThemeToHighContrast = () => {
   // alert('high-contrast theme');
   document.querySelector(".container").className = "container high-contrast";
};

document.querySelector("#default").addEventListener('click', changeThemeToDefault);
document.querySelector("#desert").addEventListener('click', changeThemeToDesert);
document.querySelector("#ocean").addEventListener('click', changeThemeToOcean);
document.querySelector("#high-contrast").addEventListener('click', changeThemeToHighContrast);
