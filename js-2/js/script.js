const listElement = document.querySelector("#list");
const taskInputElement = document.querySelector("#task");

let list = [
  { Id: 0, task: "En Az 4 Saat Kodlama Yap" },
  { Id: 1, task: "3 litre su iç" },
];

window.addEventListener("load", () => {
  fillList();
});

function newElement() {
  let task = taskInputElement.value;
  if (task.trim().length) {
    list.push({ id: list.length, task: taskInputElement.value });
    fillList();
    taskInputElement.value = "";
    $("#successToast").toast("show"); //Popup success toast
  } else {
    $("#errorToast").toast("show"); //Popup err toast
  }
}

function deleteElement(e) {
  //console.log(e.parentNode.id);

  if (e) {
    let idToRemove = e.parentNode.id;

    index = list
      .map(function (item) {
        return item.Id;
      })
      .indexOf(idToRemove);

    list.splice(index, 1);
    fillList();
  }
}

function fillList() {
  listElement.innerHTML = "";
  list.forEach((listItem) => {
    var li = document.createElement("li");
    li.addEventListener("click", (e) => {
      e.target.classList.toggle("listItem");
    });
    li.setAttribute("id", listItem.id);
    li.appendChild(document.createTextNode(listItem.task));
    li.innerHTML +=
      '<button type="button" class="btn btn-outline-primary float-right" onClick="deleteElement(this)">X</button>';
    listElement.appendChild(li);
  });
}
