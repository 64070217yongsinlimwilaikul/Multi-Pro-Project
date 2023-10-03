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
window.addEventListener("scroll", reveal);

function showSection(seclist) {
    for (let i in seclist) {
      document.querySelector('#section-' + seclist[i] ).classList.remove("none");
    }
}

function scrollToID(ID) {document.querySelector('#section-' + ID).scrollIntoView();}