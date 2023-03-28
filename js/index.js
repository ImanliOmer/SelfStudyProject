var navbar = document.querySelector("header");
var sticky = 45
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky-nav")
  }
  if (window.scrollY < sticky) {
    navbar.classList.remove("sticky-nav")
  }
}
window.onscroll = function() {myFunction()};

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
const btn = document.querySelector(".menu-btn")
const collapse = document.querySelector(".nav-menu-collapse")
btn.addEventListener('click' , function() {
    collapse.classList.toggle("visible")
});

var acc = document.getElementsByClassName("card-question");
var answers = document.querySelectorAll(".answer-collapse")
var i;
let ansOpen = false
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var ans = this.nextElementSibling;
    if(!ansOpen) {
      for (let j  = 0; j < answers.length; j++) {
        answers[j].classList.remove('visible')
      }
      ans.classList.add('visible');
      ansOpen = true;
    } else {
      
      ans.classList.remove('visible');
      ansOpen = false;
    }
  })
}


