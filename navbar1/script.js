window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

window.addEventListener("scroll", function () {
  var logo = this.document.querySelector(".logo");
  logo.classList.toggle("moveRight");
});

window.addEventListener("scroll", function () {
  var logo = this.document.querySelector(".link");
  logo.classList.toggle("moveLeft");
});

setInterval(function () {
  var tempscroll = $(window).scrollTop();
  setTimeout(function () {
    if (tempscroll == $(window).scrollTop()) {
      $(document.body).removeClass("moveRight");
    } else {
      $(document.body).addClass("moveRight");
    }
  }, 75);
}, 100);
