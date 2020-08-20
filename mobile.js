"use strict";

const contacts = [
  { "Mary One": 1286100200 },
  { "George Two": 5886300300 },
  { "Jason One": 4232300400 },
  { "Chris One": 4387500500 },
  { "John One": 3944600600 },
  { "Mark One": 2765300200 },
  { "Christina One": 1244900800 },
  { "James One": 5832400100 },
  { "Michael One": 3945600700 },
  { "Jason Two": 5932600200 },
  { "Carol One": 2738700800 },
  { "Mary Two": 2986100500 }
];

const span = document.querySelector("span");
const inputText = document.querySelector("#name");
let arr = [];

const displayItems = (name, phone, index) => {
  const isEven = index % 2 === 0;
  span.innerHTML += `<div class="contact ${isEven ? "dark" : "light"}">
    <div class="icon"><i class=" ${
      isEven ? "fa" : "far"
    } fa-user-circle"></i></div>
    <div class="info"> ${name} ${phone}</div>
    <div class="icon-list">
    <i class="fas fa-phone-alt"></i>
    <i class="far fa-comment-dots"></i>
    </div>
    </div>`;
};

contacts.map((item, index) => {
  for (let prop in item) {
    displayItems(prop, item[prop], index);
  }
});

inputText.addEventListener("keyup", function (e) {
  let user = this.value;
  let userCapitalize = user.charAt(0).toUpperCase() + user.slice(1);
  span.innerHTML = ``;
  arr = [];

  contacts.map((item) => {
    for (let prop in item) {
      let phone = item[prop].toString();
      let name = prop;
      let nameExists =
        name.indexOf(userCapitalize) > -1 &&
        name.indexOf(userCapitalize) === 0 &&
        userCapitalize !== "";
      let wrongName =
        name.indexOf(userCapitalize) > -1 && name.indexOf(userCapitalize) !== 0;
      let numberExists =
        phone.indexOf(user) > -1 && phone.indexOf(user) === 0 && user !== "";
      let wrongNumber = phone.indexOf(user) > -1 && phone.indexOf(user) !== 0;

      if (nameExists) {
        let name2 = name.replace(
          userCapitalize,
          `<strong>${userCapitalize}</strong>`
        );
        arr.push({name: name2, phone: phone});
      } else if (numberExists) {
        let phone2 = phone.replace(user, `<strong>${user}</strong>`);
        arr.push({name: name, phone: phone2});
      } else if (wrongName || wrongNumber) {
        span.innerHTML = ``;
      } else if (user === "") {
        arr.push({name: name, phone: phone});
      }
    }
  });

    arr.map((item, index) => {
       displayItems(item.name, item.phone, index);
    });
  
});
