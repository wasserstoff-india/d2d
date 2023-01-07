import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const toggler = document.getElementById("navbar-toggler");
const menu = document.getElementById("navlist");
toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  menu.style.display = (toggler.classList.contains("active")) ? "block" : "none";
});

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      280: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 40
      },
      992: {
        slidesPerView: 8,
        spaceBetween: 40
      }
    }
  });

  const swiperAbout = new Swiper('.swiper-about', {
    speed: 300,
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
  });