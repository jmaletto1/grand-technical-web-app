// function myFunction() {
//   var x = document.getElementById("sidebar__menu");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

let open = false;

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector(".main").style.marginLeft = "250px";
  document.querySelector(".main").style.opacity = ".7";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
  document.querySelector(".main").style.marginLeft = "0";
  document.querySelector(".main").style.opacity = "1";
}
