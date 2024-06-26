$(document).ready(function () {
  // scroll menu navbar
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.nav-bar').addClass('sticky');
    } else {
      $('.nav-bar').removeClass('sticky');
    }
  });

  // toggle menu/nav-bar
  $('.menu-btn').click(function () {
    $('.nav-bar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // typing animation
  var typed = new Typed('.typing', {
    strings: [
      ' seu banco!',
      ' seus dados!',
      ' sua conta!',
      ' sua vida!',
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },

      600: {
        items: 2,
        nav: false,
      },

      1000: {
        items: 2,
        nav: false,
      },
    },
  });
});


//PORTFOLIO SWIPER
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});


$(document).ready(function(){
  $('#myScrollspy').on('click', 'a', function (e) {
      e.preventDefault()
      $(this).tab('show')
  })
});
$(document).ready(function() {
  // Para a seção #drop1
  $('#myScrollspy1').on('click', 'a', function(e) {
      e.preventDefault();
      $(this).tab('show');
  });

  // Para a seção #drop2
  $('#myScrollspy2').on('click', 'a', function(e) {
      e.preventDefault();
      $(this).tab('show');
  });
});

// SHOW SCROLL UP
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 1000) 
      scrollUp.classList.add('show-scroll')
  else
    scrollUp.classList.remove('show-scroll')
}
 
window.addEventListener('scroll', scrollUp);

const thirdLink = document.querySelector('a[href="#third"]');
    thirdLink.addEventListener('click', (event) => {
      event.preventDefault();
      const thirdSection = document.getElementById('third');
      thirdSection.scrollIntoView({ behavior: 'smooth' });
    });