// Tunggu sampai ikon Feather selesai diganti
document.addEventListener("DOMContentLoaded", function () {
  // Toggle class active
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburgerMenu = document.querySelector("#hamburger-menu");

  hamburgerMenu.onclick = function () {
    navbarNav.classList.toggle("active");
  };
});

const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
