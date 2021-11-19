console.log('hello')


const header = document.querySelector('.header');
const logo = document.querySelector('.logo-imari-white');
const toggle = document.querySelector('.menu-toggle-1');
const navList = document.querySelector('.nav-list');
// const navLink = document.querySelector('.nav-link-1');
// const times = document.querySelector('.fa-times');

const scrollMenu = document.querySelector('.back-to-top-menu');

window.onscroll = function(){
  var top = window.scrollY;
  console.log('top');
  if (top >= 100) {
    header.classList.add('active-1');
    logo.classList.add('active-1');
    toggle.classList.add('active-1');
    navList.classList.add('active-1');
    // times.classList.add('active');
  }
 if (top >= 500) {
    scrollMenu.classList.add('sticky');

  }
  else{
    header.classList.remove('active-1');
     logo.classList.remove('active-1');
     toggle.classList.remove('active-1');
     navList.classList.remove('active-1');
         scrollMenu.classList.remove('sticky');
    //  times.classList.remove('active');
  }
}
