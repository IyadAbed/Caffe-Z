// setTimeout(() => {
//   let cName = prompt("Please enter your name");

//   let gender = prompt("Please enter your gender (male) or (female)");

//   function gender1() {
//     while (gender != "male" && gender != "female") {
//       gender = prompt("Please enter your gender (male) or (female)");
//     }
//     if (gender == "male") {
//       alert(`Welcome Mr ${cName}`);
//     } else if (gender == "female") {
//       alert(`Welcome Ms ${cName}`);
//     }
//   }
//   gender1();

//   let typeOfTem = prompt("Do you prefer your drink hot or cold?");
//   let typeOfDrink = prompt("Please write down your drink☕");
//   alert("please wait the drink is being prepered");

//   if (gender == "male") {
//     console.log(
//       "Ok Mr " + cName + " " + "your order is " + typeOfTem + " " + typeOfDrink
//     );
//   } else if (gender == "female") {
//     console.log(
//       "Ok Ms " + cName + " " + "your order is " + typeOfTem + " " + typeOfDrink
//     );
//   } else {
//     console.log(
//       "Ok " + cName + " " + "your order is " + typeOfTem + " " + typeOfDrink
//     );
//   }

//   let answer = [cName, gender, typeOfTem, typeOfDrink];

//   for (let i = 0; i < answer.length; i++) {
//     console.log(answer[i]);
//   }

// let sad = document.getElementById("customerInfo");
// let div = document.createElement("div");
// let par = document.createElement("p");
// let ul = document.createElement("ul");
// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");

// par.textContent = `${"Name :"} ${cName}`;
// li1.textContent = `${"Gender :"} ${gender}`;
// // li2.textContent = ("age : 26")
// li3.textContent = `${"Drink"} ${typeOfTem} ${typeOfDrink}`;

// // ul.appendChild(li1);
// // ul.appendChild(li3);
// // ul.appendChild(li2);

// // div.appendChild(par);
// // div.appendChild(ul);

// // info.appendChild(div);

// ul.appendChild(li1);
// ul.appendChild(li3);

// div.appendChild(par);
// div.appendChild(ul);
// sad.appendChild(div);

// }, 1000);

const form = document.getElementById("cInfo");
const form1 = document.getElementById("card");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let username = event.target.name.value;
  let birthdate = event.target.age.value;
  let drink = event.target.drinkName.value;
  let drinkhot = event.target.hot.checked;
  let drinkcold = event.target.cold.checked;
  let tem = ""
  if (drinkcold) {
    tem = tem + " cold "
  }
  if (drinkhot) {
    tem = tem + " hot "
  }
  render(username, birthdate, drink, tem);
  console.log(username, birthdate, drink, drinkhot, drinkcold);
});

function render(username, birthdate, drink, tem) {
  let p1 = document.createElement("p");
  p1.textContent = `Username : ${username}`;
  let p2 = document.createElement("p");
  p2.textContent = `Birthdate : ${birthdate}`;
  let p3 = document.createElement("p");
  p3.textContent = `Drink name : ${drink}`;
  let p4 = document.createElement("p");
  p4.textContent = ` ${tem}`;
  form1.appendChild(p1);
  form1.appendChild(p2);
  form1.appendChild(p3);
  form1.appendChild(p4);
}
