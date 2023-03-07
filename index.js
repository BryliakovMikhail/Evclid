// burger

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener(
  "click",

  function () {
    burger.classList.toggle("burger--active");

    menu.classList.toggle("header__nav--active");

    document.body.classList.toggle("stop-scroll");
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("header__nav--active");

    document.body.classList.remove("stop-scroll");
  });
});

// search

let searchBtn = document.querySelector(".search-btn");
let searchBtnClose = document.querySelector(".search-btn-close");
let searchBox = document.querySelector(".search-box");

searchBtn.addEventListener(
  "click",

  function () {
    searchBtn.classList.toggle("search-btn--active");

    searchBox.classList.toggle("search-box--active");
  }
);

searchBtnClose.addEventListener("click", function () {
  searchBtn.classList.remove("search-btn--active");

  searchBox.classList.remove("search-box--active");
});

// slider

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  variableWidth: true,
  // пагинация
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // навигация
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 6000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
});

// tabs

document.querySelectorAll(".tabs-nav__btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll(".tabs-nav__btn").forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn--active");
    document.querySelectorAll(".tabs-item").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item--active");
  });
});

// accordion

new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});
