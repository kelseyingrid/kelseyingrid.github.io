const nav = document.querySelector(".process-steps-flex");
const topOfNav = nav.offsetTop - 80;
const main = document.getElementById("main");

function fixNav() {
  if(window.scrollY >= topOfNav) {
    main.style.paddingTop = nav.offsetHeight + "px";
    nav.classList.add("fixed-nav");
  } else {
    main.style.paddingTop = 0;
    nav.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav)
