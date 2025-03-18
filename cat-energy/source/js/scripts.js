var navMain = document.querySelector('.site-menu');
var navToggle = document.querySelector('.site-menu__toggler');

navMain.classList.remove('site-menu--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('site-menu--closed')) {
    navMain.classList.remove('site-menu--closed');
    navMain.classList.add('site-menu--opened');
  } else {
    navMain.classList.add('site-menu--closed');
    navMain.classList.remove('site-menu--opened');
  }
});