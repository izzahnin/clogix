const menuToggle = document.getElementById("toggle-button");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", function () {
  navList.classList.toggle("active");
});
