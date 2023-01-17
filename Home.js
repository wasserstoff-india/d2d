import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const toggler = document.getElementById("navbar-toggler");
const menu = document.getElementById("navlist");
toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
  menu.style.display = (toggler.classList.contains("active")) ? "block" : "none";
});

const testimonies = [
  {
    name: "Himanshi Sharma",
    review: "<span class='circle'></span>It was my first meetup and it went amazing, got to learn a lot and also got a chance to get connected a lot of techies and seniors."
  },
  {
    name: "Akansha Gupta",
    review: "<span class='circle'></span>The session was amazing. Would love to attend more such meetups! Thank you for inviting me :)"
  },
  {
    name: "Hiteshi Dattatrey",
    review: "<span class='circle'></span>It was amazing to be a part of the meet-up. Got to learn a lot and network with people. Thank you for inviting!"
  },
  {
    name: "Nishant Attrey",
    review: "<span class='circle'></span>I loved it, Learned a lot. Thank you so much for organizing this event"
  },
  {
    name: "Nitin Singh",
    review: "<span class='circle'></span>As it was my first D2D meetup, I can't stip thinking about the event. It was great, got to learn a lot, and also got the opportunity to meet and connect with amazing folksm"
  },
  {
    name: "Naman Katariya",
    review: "<span class='circle'></span>The meet-up was fabulous learned about how to create your personal brand, acing hackathon and loved the networking part, Thank you so much di for inviting me!"
  }
]
const quote = document.getElementById("review");
const name = document.getElementById("name");
const next = document.getElementById("testimony-slide");
next.addEventListener("click", () => {
  quote.innerHTML = testimonies[i].review;
  name.innerHTML = testimonies[i].name;
  i++;
  i = i%testimonies.length;
})
let i=0;
setInterval(()=>{
  quote.innerHTML = testimonies[i].review;
  name.innerHTML = testimonies[i].name;
  i++;
  i = i%testimonies.length;
},5000);

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