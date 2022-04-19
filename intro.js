function dropdownMenu() {
  document.getElementById("dropdownId").classList.toggle("showDropdown");
}

window.onclick = function (event) {
  if (!event.target.matches(".menu-btn")) {
    var dropdowns = document.getElementsByClassName("menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("showDropdown")) {
        openDropdown.classList.remove("showDropdown");
      }
    }
  }
};

// const dropdownToggleFeatures = document.querySelector(".menu-btn__features");
// const dropdownToggleCompany = document.querySelector(".menu-btn__company");
// const dropdownFeatures = document.querySelector(".menu-content__features");
// const dropdownCompany = document.querySelector(".menu-content__company");

// dropdownToggleFeatures.addEventListener("click", () => {
//   dropdownFeatures.classList.toggle("dropdown-active");
// });

function myFunction() {
  var element = document.getElementById("dropdownIdFeatures");
  element.classList.toggle("showDropdown");
}

// function myFunction() {
//   document.getElementById("dropdownId").onclick = function () {
//     element.classList.toggle("showDropdown");
//   };
// }

function dropdownMenu() {
  var element = document.getElementById("dropdownIdCompany");
  element.classList.toggle("showDropdown");
}

// function changeImage() {
//   if (
//     document.getElementById("imgClickAndChange").src ==
//     "http://www.userinterfaceicons.com/80x80/minimize.png"
//   ) {
//     document.getElementById("imgClickAndChange").src =
//       "http://www.userinterfaceicons.com/80x80/maximize.png";
//   } else {
//     document.getElementById("imgClickAndChange").src =
//       "http://www.userinterfaceicons.com/80x80/minimize.png";
//   }
// }
