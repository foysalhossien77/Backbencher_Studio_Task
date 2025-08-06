document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navbar = document.querySelector(".navbar");
  const menuIcon = document.querySelector(".menu-btn i");

  menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("fa-times");
    menuIcon.classList.toggle("fa-bars");
  });
});
