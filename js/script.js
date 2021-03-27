const mainDiv = document.querySelector(".main");

let menuStatus = "closed";

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector(".main").style.marginLeft = "250px";
  document.querySelector(".main").style.opacity = ".7";
  setTimeout(function () {
    menuStatus = "open";
  }, 100);
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
  document.querySelector(".main").style.marginLeft = "0";
  document.querySelector(".main").style.opacity = "1";
  menuStatus = "closed";
}

// Close Mobile Nav when a user clicks outside
mainDiv.addEventListener("click", () => {
  if (menuStatus === "open") {
    closeNav();
  }
});
