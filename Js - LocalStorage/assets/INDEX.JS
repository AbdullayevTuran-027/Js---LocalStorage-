const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const age = document.querySelector(".age");
const get = document.querySelector(".btn-primary");
const body = document.querySelector("tbody");
let count = 1;
let index = 0;
let array = [];
get.addEventListener("click", () => {
  let person = {
    name: name.value,
    surname: surname.value,
    age: age.value,
  };
  if (person.name != "" && person.surname != "" && person.age != "") {
    if (JSON.parse(localStorage.getItem("arr")) !== null) {
      let arrayTo = JSON.parse(localStorage.getItem("arr"));
      arrayTo.push(person);
      localStorage.setItem("arr", JSON.stringify(arrayTo));
    } else {
      array[index] = person;
      localStorage.setItem("arr", JSON.stringify(array));
    }
  }

  index++;
});

function setperson() {
  let aray = JSON.parse(localStorage.getItem("arr"));

  for (let index = 0; index < aray.length; index++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    td1.innerText = count;
    td2.innerText = aray[index].name;
    td3.innerText = aray[index].surname;
    td4.innerText = aray[index].age;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    body.appendChild(tr);

    count++;
  }
}
setperson();