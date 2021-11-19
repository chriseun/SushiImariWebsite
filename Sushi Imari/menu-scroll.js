
console.log('whatup')

        // window.addEventListener("scroll", function () {
        //     var header = document.querySelector(".back-to-top-menu");
        //     if top = window.scrollY;
        //     if (top >= 1000){
        //     header.classList.toggle("sticky", window.scrollY)
        //     }
        // })

const scrollMenu = document.querySelector('.back-to-top-menu');

window.onscroll = function(){
  var topMenu = window.scrollY;

  console.log('topMenu');

  if (topMenu >= 500) {
    scrollMenu.classList.add('sticky');
  }

  else {
    scrollMenu.classList.remove('sticky');
  }
}
