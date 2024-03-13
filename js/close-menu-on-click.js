document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    let collapsableMenu = document.querySelector(".navbar-collapse");
    if (collapsableMenu.classList.contains("show")) {
      collapsableMenu.classList.remove("show");

      $("#menu-icon").fadeOut(200, function () {
        $("#menu-icon").removeClass("fa-times").addClass("fa-bars").fadeIn(200);
      });
    }
  });
});
