// function dropdownMenu() {
//   document.getElementById("dropdownId").classList.toggle("showDropdown");
// }

// window.onclick = function (event) {
//   if (!event.target.matches(".menu-btn")) {
//     var dropdowns = document.getElementsByClassName("menu-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("showDropdown")) {
//         openDropdown.classList.remove("showDropdown");
//       }
//     }
//   }
// };

function myFunction() {
  var element = document.getElementById("dropdownIdFeatures");
  element.classList.toggle("showDropdown");
}

function dropdownMenu() {
  var element = document.getElementById("dropdownIdCompany");
  element.classList.toggle("showDropdown");
}

function myFunctionMobile() {
  var element = document.getElementById("dropdownIdFeaturesMobile");
  element.classList.toggle("showDropdown");
}

function dropdownMenuMobile() {
  var element = document.getElementById("dropdownIdCompanyMobile");
  element.classList.toggle("showDropdown");
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("mySidebar").style.opacity = "1";
  document.getElementById("main-mobile").style.marginLeft = "250px";
  document.getElementById("containerMobile").style.backgroundColor =
    "hsl(0, 0%, 8%)";
  document.getElementById("containerMobile").style.opacity = "0.75";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main-mobile").style.marginLeft = "0";
  document.getElementById("containerMobile").style.backgroundColor =
    "hsl(0, 0%, 98%)";
}

var dropdown = document.getElementsByClassName("menu-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
