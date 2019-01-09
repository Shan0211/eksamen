let video = document.querySelector("#myVideo");
let btn = document.querySelector("#myBtn");

window.addEventListener("load", sidenVises);
function sidenVises(){
    console.log("sidenVises");
}

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

























