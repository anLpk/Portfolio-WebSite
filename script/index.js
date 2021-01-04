// Changing cartoon avatar image by click in home page
// console.log("hello from inside");
const img = document.querySelector("#cartoonAvatar");
let mysrc = "../images/technician.png";

function changeImage() {
  if (mysrc === "../images/technician.png") {
    img.src = "../images/technician.png";
    mysrc = "../images/developer.png";
  } else {
    img.src = "../images/developer.png";
    mysrc = "../images/technician.png";
  }
}

img.addEventListener("click", changeImage);

// Calculation of the time I spent as a developer
// let timePass = Math.round((Date.now() - new Date(2020, 2, 20)));

// document.getElementById("time").innerHTML = timePass;

function xClock() {
  xC = new Date(2020, 1, 1);
  xV = vClock(Date.now());
  document.getElementById("timeCalc").innerHTML = xV - xC;
  setTimeout("xClock()", 1);
}

function vClock(v) {
  return v > 9 ? "" + v : "0" + v;
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}

addLoadEvent(xClock);
