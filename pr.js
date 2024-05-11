const navbar = document.getElementById("navbar");
document.addEventListener("scroll", () => {
  if (window.scrollY < 110 && window.scrollY >= 0) {
    navbar.style.backgroundColor = "rgb(7, 10, 113)";
  } else if (window.scrollY > 110 && window.scrollY < 1000) {
    navbar.style.backgroundColor = "rgb(158, 11, 110)";
  } else if (window.scrollY > 1000 && window.scrollY < 1500) {
    navbar.style.backgroundColor = "rgb(162, 1, 25)";
  } else {
    navbar.style.backgroundColor = "rgb(207, 162, 78)";
  }
});
