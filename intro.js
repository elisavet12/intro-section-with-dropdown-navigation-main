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
