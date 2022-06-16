const tilesDropdownBtn = document.getElementById("menuButton")
const tilesOptions = document.getElementById("dropdownOptions")
const profileBtn = document.getElementById("profileBtn")
const profileOptions = document.getElementById("profileOptions")

// tilesDropdownBtn.onclick = function () {
//   tilesOptions.classList.toggle("hidden")
//   tilesOptions.classList.toggle("block")
// }

tilesDropdownBtn.onmouseenter = function () {
  tilesOptions.classList.toggle("hidden")
  tilesOptions.classList.toggle("block")
}

tilesOptions.onmouseleave = function () {
  tilesOptions.classList.toggle("hidden")
}

profileBtn.onclick = function () {
  profileOptions.classList.toggle("hidden")
  profileOptions.classList.toggle("block")
}