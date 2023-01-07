import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      280: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
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
  })