// Swiper Js
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  //grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Nav open close

const body = document.querySelector("body");
const navMenu = body.querySelector(".menu-content");
const navClosebtn = navMenu.querySelector(".navClose-btn");
const navOpenbtn = body.querySelector(".navOpen-btn");

if (navMenu && navOpenbtn) {
    navOpenbtn.addEventListener("click", () => {
        navMenu.classList.add("open");
        body.style.overflowY = "hidden";
    })
}

if (navMenu && navClosebtn) {
    navClosebtn.addEventListener("click", () => {
        navMenu.classList.remove("open");
        body.style.overflowY = "scroll";
    })
}

// Change bg color

// Scroll up button

// Nav link indicator

// Scroll reveal Animation