window.addEventListener("scroll", function () {
  let headerNav = document.querySelector(".header");

  if (window.scrollY > 0) {
    headerNav.classList.add("fixed-header");
  } else {
    headerNav.classList.remove("fixed-header");
  }
});

const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".navMenu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
});
