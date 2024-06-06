
// DROPDOWN  BUTTON
function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

function selectOption(option) {
    var selectedOptionBtn = document.getElementById("selectedOption");
    selectedOptionBtn.innerHTML = option.innerHTML;

    var allOptions = document.querySelectorAll(".dropdown-content a");
    allOptions.forEach(function (opt) {
        opt.classList.remove("selected");
    });

    option.classList.add("selected");

    toggleDropdown();
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(function (dropdown) {
            dropdown.style.display = "none";
        });
    }
}


// STICKY
window.addEventListener('scroll', function () {
    nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 50)
})

// BURGER STARTS
const openBurger = document.querySelector('.open');
const closeBurger = document.querySelector('.close');
const burgerList = document.querySelector('.nav__list');

openBurger.addEventListener('click', function () {
    burgerList.classList.add('active')
})

closeBurger.addEventListener('click', function () {
    burgerList.classList.remove('active')
})


// BACK TO TOP BUTTON
$(document).ready(() => {

    const backToTop = $('#backToTop')
    const amountScrolled = 0
  
    $(window).scroll(() => {
      $(window).scrollTop() >= amountScrolled
        ? backToTop.fadeIn('fast')
        : backToTop.fadeOut('fast')
    })
  
    backToTop.click(() => {
      $('body, html').animate({
        scrollTop: 0
      }, 600)
      return false
    })
  })


  





