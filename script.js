function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = -50; /* change how early or late you want the element to start revealing */

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);


function answerShow(target,oppo) {
  var target_panel = document.querySelector(target);
  var oppo_panel = document.querySelector(oppo);
  target_panel.classList.remove("panel-none");
  target_panel.classList.add("panel-show");
  oppo_panel.classList.remove("panel-show");
  oppo_panel.classList.add("panel-none");
}
  
function contentGatesOne() {
  document.querySelector('#part-1-section-5').classList.remove("panel-none");
  document.querySelector('#part-1-section-5').classList.remove("panel-show");

  document.querySelector('#part-1-section-6').classList.remove("panel-none");
  document.querySelector('#part-1-section-6').classList.remove("panel-show");
}

function contentGatesTwo() {
  document.querySelector('#part-1-section-7').classList.remove("panel-none");
  document.querySelector('#part-1-section-7').classList.remove("panel-show");
/*
  document.querySelector('#part-1-section-8').classList.remove("panel-none");
  document.querySelector('#part-1-section-8').classList.remove("panel-show");*/
}