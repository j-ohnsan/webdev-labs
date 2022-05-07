/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

let hasSwitched = false;

const changeThemeToDyslexia = () => {
  // alert('default theme');
  if (!hasSwitched) {
    document.querySelector(".container").className = "container dyslexia";
    hasSwitched = true
  } else {
    document.querySelector(".container").className = "container default";
    hasSwitched = false
  }
};

document.querySelector("#dyslexia-toggle").addEventListener('click', changeThemeToDyslexia);
