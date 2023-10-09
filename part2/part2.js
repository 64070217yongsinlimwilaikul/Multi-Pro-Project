function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    // อันนี้คือความเร็วการ fade โดยกำหนดตัวเลขที่ตัวแปรข้างล่างนะ  เหมาะนำไปใช้กับ tag ที่ใช้ความเร็วเท่าๆกัน//
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50; /* change how early or late you want the element to start revealing ยิ่งเลขมากยิ่งโผล่มาช้า เลขน้อยโผล่เร็ว(ติดลบด้วย)*/
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
    
    // อันนี้คือความเร็วการ fade โดยอิงจาก dataset.fade นะ เหมาะกับการเฉพาะเจาะจงกับ tag ที่ต้องการกำหนดความเร็ว fade เอง//
    var reveals2 = document.querySelectorAll(".reveal-2");
    for (var i = 0; i < reveals2.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals2[i].getBoundingClientRect().top;
        var elementVisible = reveals2[i].dataset.fade; //ความเร็ว fade ไปแก้ที่ data set ของ html เลขมากโผล่ช้า เลขน้อยโผล่เร็ว
    
        if (elementTop < windowHeight - elementVisible) {
          reveals2[i].classList.add("active");
        } else {
          reveals2[i].classList.remove("active");
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