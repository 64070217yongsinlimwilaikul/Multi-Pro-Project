function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50; /* change how early or late you want the element to start revealing */
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
    

    var reveals2 = document.querySelectorAll(".reveal-2");
    for (var i = 0; i < reveals2.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals2[i].getBoundingClientRect().top;
        var elementVisible = reveals2[i].dataset.fade; //ความเร็ว fade ไปแก้ที่ data set ของ html
    
        if (elementTop < windowHeight - elementVisible) {
          reveals2[i].classList.add("active");
        } else {
          reveals2[i].classList.remove("active");
        }
      }
  }
window.addEventListener("scroll", reveal);