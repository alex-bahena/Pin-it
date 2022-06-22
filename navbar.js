//////// WEBSITE SEARCH
let names = [
  "amazon",
  "gmail",
  "youtube",
  "google-drive",
  "facebook",
  "instragram",
  "google-translate",
  "whatsapp",
  "outlook",
  "github",
  "udemy",
  "linkedin",
];
//Sort names in ascending order
let sortedNames = names.sort();

//reference
let input = document.getElementById("input");

//Execute function on keyup
input.addEventListener("keyup", (e) => {
  //loop through above array
  //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  removeElements();
  for (let i of sortedNames) {
    //convert input to lowercase and compare with each string

    if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      //create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      //Display matched part in bold
      let word = "<b>" + i.substr(0, input.value.length) + "</b>";
      word += i.substr(input.value.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});
function displayNames(value) {
  input.value = value;
  removeElements();
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}

/////////////////////////////////////////////////////////////////////////////////

// Tiles Dropdown
const tilesDropdownBtn = document.getElementById("menuButton")
const tilesOptions = document.getElementById("dropdownOptions")

// Show Notes

const showNotesBtn = document.getElementById("showNotesBtn")
const notesContainer = document.getElementById("notesContainer")

// Settings

const settingsBtn = document.getElementById("settingsBtn")
const settingsOptions = document.getElementById("settingsOptions")

// New Tile

const createTileModal = document.getElementById("createTileModal")
const createNewTileBtn = document.getElementById("createNewTileBtn")
const saveTileBtn = document.getElementById("saveTileBtn")
const cancelNewTileBtn = document.getElementById("cancelNewTileBtn")

// Delete Tile

const deleteTileModal = document.getElementById("deleteTileModal")
const deleteTileModalBtn = document.getElementById("deleteTileModalBtn")
const cancelDeleteTileModalBtn = document.getElementById("cancelDeleteTileModalBtn")
const deleteTileBtn = document.getElementById("deleteTileBtn")

//  New Note

const createNoteModal = document.getElementById("createNoteModal")
const createNoteBtn = document.getElementById("createNoteBtn")
const saveNoteBtn = document.getElementById("saveNoteBtn")
const cancelNoteBtn = document.getElementById("cancelNoteBtn")

//  Delete Note 

const deleteNoteModal = document.getElementById("deleteNoteModal")
const deleteNoteModalBtn = document.getElementById("deleteNoteModalBtn")
const cancelDeleteNoteModalBtn = document.getElementById("cancelDeleteNoteModalBtn")
const deleteNoteBtn = document.getElementById("deleteNoteBtn")


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

settingsBtn.onclick = function () {
  settingsOptions.classList.toggle("hidden")
  settingsOptions.classList.toggle("block")
}

showNotesBtn.onclick = function () {
  notesContainer.classList.toggle("hidden")
  notesContainer.classList.toggle("block")
}

createNewTileBtn.onclick = function () {
  createTileModal.style.display = "flex"
}

cancelNewTileBtn.onclick = function () {
  createTileModal.style.display = "none";
}

deleteTileModalBtn.onclick = function () {
  deleteTileModal.style.display = "flex"
}

cancelDeleteTileModalBtn.onclick = function () {
  deleteTileModal.style.display = "none";
}

createNoteBtn.onclick = function () {
  createNoteModal.style.display = "flex"
}

cancelNoteBtn.onclick = function () {
  createNoteModal.style.display = "none";
}

deleteNoteModalBtn.onclick = function () {
  deleteNoteModal.style.display = "flex"
}

cancelDeleteNoteModalBtn.onclick = function () {
  deleteNoteModal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == createTileModal || event.target == deleteTileModal || event.target == createNoteModal || event.target == deleteNoteModal) {
    createTileModal.style.display = "none";
    createNoteModal.style.display = "none";
    deleteTileModal.style.display = "none";
    deleteNoteModal.style.display = "none";
  }
}

initGrid();

function initGrid() {
  var grid = new Muuri('.grid', {
    dragEnabled: true,
    layoutOnInit: false
  }).on('move', function () {
    saveLayout(grid);
  });

  var layout = window.localStorage.getItem('layout');
  if (layout) {
    loadLayout(grid, layout);
  } else {
    grid.layout(true);
  }
}

function serializeLayout(grid) {
  var itemIds = grid.getItems().map(function (item) {
    return item.getElement().getAttribute('data-id');
  });
  return JSON.stringify(itemIds);
}

function saveLayout(grid) {
  var layout = serializeLayout(grid);
  window.localStorage.setItem('layout', layout);
}

function loadLayout(grid, serializedLayout) {
  var layout = JSON.parse(serializedLayout);
  var currentItems = grid.getItems();
  var currentItemIds = currentItems.map(function (item) {
    return item.getElement().getAttribute('data-id')
  });
  var newItems = [];
  var itemId;
  var itemIndex;

  for (var i = 0; i < layout.length; i++) {
    itemId = layout[i];
    itemIndex = currentItemIds.indexOf(itemId);
    if (itemIndex > -1) {
      newItems.push(currentItems[itemIndex])
    }
  }

  grid.sort(newItems, { layout: 'instant' });
}