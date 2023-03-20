var myForm = document.getElementById("myForm");
var myForm = document.getElementById("myInput");
var myForm = document.getElementById("myItem");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  createItem(myInput.value);
});

function createItem(InputItems) {
  var items = `<li>${InputItems}
    <button onclick="deleteElement(this)">Delete</button></li>`;
  myItem.insertAdjacentHTML("beforeend", items);
  myInput.value = "";
  myInput.focus();
}

function deleteElement(ElementToDelete) {
  ElementToDelete.parentElement.remove();
}
