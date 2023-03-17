window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  var logo = this.document.querySelector(".logo");
  logo.classList.toggle("jumping");
});
