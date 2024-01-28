const form = document.querySelector("form");
const input = document.querySelector(".input");
const button = document.querySelector('input[value="Add"]');
const list = document.querySelector(".list");

form.onsubmit = function (e) {
  e.preventDefault();
};

button.onclick = addTask;

function addTask() {
  const taskValue = input.value.trim();

  if (taskValue !== "") {
    list.innerHTML += `<ul><li><input type="checkbox" class="check">${taskValue}</li></ul>`;
    input.value = "";
  }

  const checkboxes = document.querySelectorAll('.check');
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        checkbox.parentElement.classList.add('checked');
      } else {
        checkbox.parentElement.classList.remove('checked');
      }
    });
  });
}




