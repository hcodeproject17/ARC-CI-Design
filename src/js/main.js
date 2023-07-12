

var swiper = new Swiper(".slide", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");
const list_menu = document.querySelectorAll("#menu ul li");
const hero = document.querySelector("#menu span a");
menuToggle.addEventListener("click", function () {
  menu.classList.toggle("expand");
});

list_menu.forEach(function (item) {
  item.addEventListener("click", function (e) {
    menu.classList.remove("expand");
  });
});

hero.addEventListener("click", function (e) {
  menu.classList.remove("expand");
});

var typed = new Typed(".auto-type", {
  strings: [
    "Planning",
    "Design",
    "Engineering",

  ],

  typeSpeed: 120,
  backSpeed: 100,

  
  loop: true,
});
var typed = new Typed(".auto-type2", {
  strings: [
    "Planning",
    "Design",
    "Engineering",

  ],

  typeSpeed: 120,
  backSpeed: 100,

  
  loop: true,
});

var load;

function loader() {
  load = setInterval(
    showPage,
    Math.floor(Math.random() * (7000 - 2000 + 1)) + 2000
  );
}

function showPage() {
  document.getElementById("logo").classList.add("animate-fade_up");
  
  document.getElementById("isi_hero").classList.add("animate-fade_up_d2");
  $(".loader_wrap").fadeOut(1000, function () {
    
    document.querySelector(".loader_wrap").style.display = "none";
  });
}

