var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle-menu');

var openedClass = 'main-nav--opened';
var closedClass = 'main-nav--closed';

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
if (navMain.classList.contains(closedClass)) {
navMain.classList.remove(closedClass);
navMain.classList.add(openedClass);
}
else {
navMain.classList.remove(openedClass);
navMain.classList.add(closedClass);
}
});

var buttonBefore = document.querySelector('.example__catchange-text--before');
var buttonAfter = document.querySelector('.example__catchange-text--after');

var pictureBefore = document.querySelector('.example__cat-before');
var pictureAfter = document.querySelector('.example__cat-after');

var hiddenClass = 'visually-hidden';

buttonBefore.addEventListener('click', function() {
  pictureAfter.classList.add(hiddenClass);
  pictureBefore.classList.remove(hiddenClass);
});
buttonAfter.addEventListener('click', function() {
  pictureBefore.classList.add(hiddenClass);
  pictureAfter.classList.remove(hiddenClass);
});
