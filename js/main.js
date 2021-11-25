// Navigation menu
let menuBtn = document.querySelector(".menu-button");
let canceBtn = document.querySelector(".cancle-button");
let navBar = document.querySelector(".menu-wrap ul");

menuBtn.onclick = function() {
  menuBtn.style.opacity = '0';
  menuBtn.style.pointerEvents = 'none';
  navBar.classList.add("active");
}
canceBtn.onclick = function() {
  menuBtn.style.opacity = '1';
  menuBtn.style.pointerEvents = 'auto';
  navBar.classList.remove("active");
}

// Donate Amount Select 
function donateAmount(elem) {
    var a = document.getElementsByClassName('dntAmt');
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('select')
    }
    elem.classList.add('select');
}


