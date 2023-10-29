document.addEventListener("DOMContentLoaded", function () {
    const resumeButtons = document.querySelectorAll(".resume-button");
    resumeButtons.forEach(button => {
        button.addEventListener("click", function () {
            window.open('NavneetSrivastava_Resume', '_blank');
        });
    });
});

let hamburger = document.querySelector(".hamburger");
 let nav = document.querySelector("nav");
  hamburger.onclick = function () {
    nav.classList.toggle("active");
  }


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav-menu");

let sticky = navbar.offsetTop;
function myFunction() {
  
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


const container = document.querySelector("#projects");
const leftButton = document.querySelector("#scrollLeft");
const rightButton = document.querySelector("#scrollRight");

const scrollStep = 460;

leftButton.addEventListener("click", () => {
  scrollHorizontally(-scrollStep);
});

rightButton.addEventListener("click", () => {
  scrollHorizontally(scrollStep);
});

function scrollHorizontally(scrollAmount) {
  const initialScrollLeft = container.scrollLeft;
  container.scrollLeft += scrollAmount;
 
}
document.getElementById("resume-link-1").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1wvtVudvPy-fFimvLizDM6hTefpENJ4PR/view?usp=sharing"
  );
};

document.getElementById("resume-link-2").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1wvtVudvPy-fFimvLizDM6hTefpENJ4PR/view?usp=sharing"
  );
};