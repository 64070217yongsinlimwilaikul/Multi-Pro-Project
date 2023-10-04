function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = -50; /* change how early or late you want the element to start revealing */

      if (elementTop < windowHeight - elementVisible) {reveals[i].classList.add("active");} 
      else {reveals[i].classList.remove("active");}
  }
}
function revealAbs(){
  var reveals = document.querySelectorAll(".revealAbs");

  for (var i = 0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = -50; /* change how early or late you want the element to start revealing */

      if (elementTop < windowHeight - elementVisible) {reveals[i].classList.add("active");} 
      else {reveals[i].classList.remove("active");}
  }
}
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", revealAbs);

function showSection(sec) {
  let seclist = []
  if(sec == 1){seclist = [9,10,11,12,13,14,15,16,17,18]}
  else if(sec == 2){seclist = [19,20,21,22]}
  else if(sec == 3){seclist = [23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]}
  else if(sec == 4){seclist = [24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]}

  for (let i in seclist) {
    document.querySelector('#section-' + seclist[i] ).classList.remove("none");
  }
}

function scrollToID(ID) {document.querySelector('#section-' + ID).scrollIntoView();}