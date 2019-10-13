// It is always helpful to use comments in your code!

// Menu One

var buttonOne = document.querySelector('.button-one');
var menuOne = document.querySelector('.hidden-one');

function toggleMenuOne() {
  menuOne.classList.toggle('show-menu-one');
}

buttonOne.addEventListener('mouseover', toggleMenuOne);
buttonOne.addEventListener('mouseleave', toggleMenuOne);

// Menu Two

var buttonTwo = document.querySelector('.button-two');
var menuTwo = document.querySelector('.hidden-two');

function toggleMenuTwo() {
  menuTwo.classList.toggle('show-menu-two');
}

buttonTwo.addEventListener('mouseover', toggleMenuTwo);
buttonTwo.addEventListener('mouseleave', toggleMenuTwo);
