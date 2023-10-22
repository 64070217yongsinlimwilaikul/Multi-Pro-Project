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

  var sec5 = document.querySelector("#section-5");
  var sec11 = document.querySelector("#section-11");
  
  var reveals3 = document.querySelectorAll(".reveal-3");
  var reveals4 = document.querySelectorAll(".reveal-4");
  
  var sec5Height = sec5.offsetHeight;
  var sec11Height = sec11.offsetHeight;
  
  var sec5Top = sec5.getBoundingClientRect().top;
  var sec11Top = sec11.getBoundingClientRect().top;

  var heightOfRevels5 = sec5Height / (reveals3.length + 1);
  var heightOfRevels11 = sec11Height / (reveals4.length + 1);

  var sec5Visible = Math.ceil((-sec5Top - 100)/ heightOfRevels5);
  var sec11Visible = Math.ceil((-sec11Top - 100)/ heightOfRevels11);

  if(sec5Visible >= reveals3.length){
    sec5Visible = reveals3.length;
    document.querySelector("#book-text").classList.add("active");
  }
  else if(sec5Visible <= 0){
    sec5Visible = 0;
  }
  else if(sec5Visible < reveals3.length){
    document.querySelector("#book-text").classList.remove("active");
  }
  for (var i = 0; i < reveals3.length; i++) {
    reveals3[i].classList.remove("active");
  }
  for (var i = 0; i < sec5Visible; i++) {
    reveals3[i].classList.add("active");
  }
  
  if(sec11Visible >= reveals4.length){
    sec11Visible = reveals4.length;
    document.querySelector("#posit-text").classList.add("active");
  }
  else if(sec11Visible <= 0){
    sec11Visible = 0;
  }
  else if(sec11Visible < reveals4.length){
    document.querySelector("#posit-text").classList.remove("active");
  }
  for (var i = 0; i < reveals4.length; i++) {
    reveals4[i].classList.remove("active");
  }
  for (var i = 0; i < sec11Visible; i++) {
    reveals4[i].classList.add("active");
  }
  

  var obj_all = document.querySelectorAll(".obj");
  for (var i = 0; i < obj_all.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = obj_all[i].getBoundingClientRect().top;
    var elementVisible = obj_all[i].dataset.fade; //ความเร็ว fade ไปแก้ที่ data set ของ html เลขมากโผล่ช้า เลขน้อยโผล่เร็ว
    console.log(elementTop < windowHeight - elementVisible)
    

    if (elementTop < windowHeight - elementVisible) {
      obj_all[i].classList.add("obj-" + (i + 1) + "-animate");
    } else {
      obj_all[i].classList.remove("obj-" + (i + 1) + "-animate");
    }
  }
}
window.addEventListener("scroll", reveal);
function fixed() {
  var detailsBook = document.querySelector(".all-details-book");
  var divToFix = document.querySelector("#section-5");;
  var elementTop = divToFix.getBoundingClientRect().top;
  var elementBottom = divToFix.getBoundingClientRect().bottom;

  if (elementTop < 0 & elementBottom > window.innerHeight) {
    detailsBook.style.position = 'fixed';
    detailsBook.style.top = '25%';
    detailsBook.style.bottom = '25%';
  }
  else if (elementBottom <= window.innerHeight) {
    var bottom = ((window.innerHeight - elementBottom) * (100 / window.innerHeight));
    detailsBook.style.top = -bottom + "%";
    detailsBook.style.bottom = bottom + "%";
  }else {
    detailsBook.style.position = 'static';
  }
}
window.addEventListener("scroll", fixed);

function fixed2() {
  var detailsposit = document.querySelector(".all-details-posit");
  var divToFix2 = document.querySelector("#section-11");;
  var elementTop = divToFix2.getBoundingClientRect().top;
  var elementBottom = divToFix2.getBoundingClientRect().bottom;

  if (elementTop < 0 & elementBottom > window.innerHeight) {
    detailsposit.style.position = 'fixed';
    detailsposit.style.top = '10%';
    detailsposit.style.bottom = '10%';
  }
  else if (elementBottom <= window.innerHeight) {
    var bottom = ((window.innerHeight - elementBottom) * (100 / window.innerHeight));
    detailsposit.style.top = -bottom + "%";
    detailsposit.style.bottom = bottom + "%";
  }else {
    detailsposit.style.position = 'static';
  }
}
window.addEventListener("scroll", fixed2);


function contentGates(seclist) {
  for (let i = seclist[0]; i <= seclist[1]; i++) {
    console.log(document.querySelector('#section-' + i));
    if (document.querySelector('#section-' + i) == null) {
      break;
    }
    else {
      document.querySelector('#section-' + i).classList.remove("panel-none");
    }
  }
}
function scrollToID(ID) { document.querySelector('#section-' + ID).scrollIntoView(); }

function stopPhone() {
  console.log(document.querySelector('.phone-shake'));
  document.querySelector('#phone').classList.remove('phone-shake');
  document.querySelector('.button-phone').classList.remove('button-phone-animate')
}