let menu = document.querySelector(".waaper");
let shareMenu = document.querySelector(".share-menu");
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  let x = e.offsetX,
    y = e.offsetY,
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    cmWidth = menu.offsetWidth,
    cmHeight = menu.offsetHeight;

  if (x > winWidth - cmWidth - shareMenu.offsetWidth) {
    shareMenu.style.left = "-200px";
  } else {
    shareMenu.style.left = "";
    shareMenu.style.right = "-200px";
  }
  x = x > winWidth - cmWidth ? winWidth - cmWidth : x;
  y = y > winHeight - cmHeight ? winHeight - cmHeight : y;

  menu.style.left = `${x}px`;
  menu.style.top = `${y}px`;
  menu.style.visibility = "visible";
});

document.addEventListener("click",()=>{
  menu.style.visibility = "hidden";
 

})