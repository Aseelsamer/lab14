'use strict';

var navbar = document.querySelector('.navbar');
var ham = document.querySelector('.ham');
ham.addEventListener('click', toggleHamburger);
function toggleHamburger() {
  navbar.classList.toggle('showNav');
  ham.classList.toggle('showClose');
}


var menuLinks = document.querySelectorAll('.menuLink');
menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener('click', toggleHamburger);
  }
);


$('#updataForm').hide();
$('#showUpdateForm').on('click', function () {
  $('#updataForm').toggle();
});
