"use strict";

// let myName;
// function first() {
//   const age = 30;
//   if (age >= 30) {
//     let decade = 3;
//     var millenial = true;
//     myName = "Jonas";
//   }
//   function second() {
//     const job = "teacher";
//     console.log(`${myName} is ${age}-old ${job}`);
//     console.log(myName);
//   }
//   second();
//   console.log(myName);
// }
// first();
// console.log(myName);

/*const a = "Jonas";
first();
function first() {
  const b = "hello";
  second();
  function second() {
    const c = "Hi";
    third();
  }
}

function third() {
  const d = "Hey!";
  console.log(d + c + b + a);
} */
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(add(2, 3));
  }
  printAge();
  return age;
}
const firstName = "Jonas";
console.log(calcAge(1991));

*/

// variable environment hoisting

// let a = 10;
// hello();
// function hello() {
//   let a = 20;
//   console.log("Hello World" + a);
// }

// console.log(a);

// console.log(me);
// console.log(job);
// console.log(birthYear);

// var me = "Jonas";
// let job = "teacher";
// const birthYear = 1991;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };
// var addArrow = (a, b) => a + b;

//Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// const Jonas = {
//   name: "Jonas",
//   year: 1989,
//   calcAge: function () {
//     return 2037 - this.year;
//   },
// };

// console.log(Jonas.calcAge());

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);
// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//     //solution1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   //console.log(this.year >= 1981 && this.year <= 1996); //Gives error as regular functions will have it's own this keyword but we can use arrow function
//     // };
//     //solution2
//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.greet();
// jonas.calcAge();

//arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// var addArrow = (a, b) => a + b;
// addExpr(2, 5);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "Jonas",
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log(friend);
// console.log(me);

// let lastName = "Williams";
// let oldLastName = lastName;
// lastName = "Davis";
// console.log(lastName);
// console.log(oldLastName);

// const jessica = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";
// console.log(marriedJessica);
// console.log(jessica);

// //copying objects
// const jessica2 = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
//   family: ["Alice", "Bob"],
// };

// const jessicaCopy = Object.assign({}, jessica2); // shallow copy - only copy properties of first level
// jessicaCopy.lastName = "Davis";
// console.log(jessica2);
// console.log(jessicaCopy);
// jessicaCopy.family.push("Mary");
// jessicaCopy.family.push("John");
// console.log(jessica2);
// console.log(jessicaCopy);

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const arr = [2, 3, 4];
// const [a, b, c] = arr;
// console.log(a, b, c);

// let [first, second] = restaurant.categories;
// console.log(first, second);
// [first, second] = [second, first]; //switching variables
// console.log(first, second);

// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
// };
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "21 street",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "22 street",
//   mainIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: cats,
// } = restaurant;
// console.log(restaurantName, hours, cats);

// //default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 3 };
// ({ a, b } = obj);
// console.log(a, b);

// //nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//spread operator
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasa with ${ing1},${ing2},${ing3}`);
//   },
// };

// const ingrediants = [
//   prompt("Let's make pasta! Ingrediant1"),
//   prompt("Ingrediant2"),
//   prompt("Ingrediant3"),
// ];
// console.log(ingrediants);
// restaurant.orderPasta(...ingrediants);

// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr, ...newArr);

// //objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);
// const restaurant = { name: "Italliano" };
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "RestarantRoma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// //copy array

// const mainMenuCopy = [...restaurant.mainMenu];
// //join 2 arrays

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = "Jonas";
// const letters = ["a", "b", ...str];
// console.log(letters);

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasa with ${ing1},${ing2},${ing3}`);
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient, otherIngredients);
//   },
// };

//rest pattern - spread operator on left side of assignment (=)

// restaurant.orderPizza("mushoom", "onions", "olives", "spinach");

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekdays);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];

//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasa with ${ing1},${ing2},${ing3}`);
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient, otherIngredients);
//   },
// };

// const restaurant = { name: "Italliano" };
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

//Nullish coalescing operator
// const restaurant = { name: "Italliano" };
// restaurant.numGuests = 1;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCoorect = restaurant.numGuests ?? 10;
// console.log(guestCoorect);

// Practice Assignment

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrusia Dortmund",
//   players: [
//     [
//       "Never",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanzi",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4.0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = game.players[0];
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const playersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(playersFinal);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(players.length);
// };

// printGoals("Davies", "Muller", "Lewandowski", "kimmich");

// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

//with optional chaining

// console.log(restaurant.openingHours?.mon?.open);

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`on ${day}, we open at ${open}`);
// }

//methods
// console.log(restaurant.order?.(0, 1) ?? "Methos does not exist");

// console.log(restaurant.orderRisotto?.(0, 1) ?? "Methos does not exist");

//arrays
// const users = [{ name: "Jonas", email: "hello@jonas.io" }];
// console.log(users[0]?.name ?? "user array empty");

// const properties = Object.keys(openingHours);
// console.log(properties);
// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) openStr += `${day}, `;
// console.log(openStr);

// const values = Object.values(openingHours);
// console.log(values);

//Entry Object
// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//Practice 2
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [goalNumber, player] of game.scored.entries()) {
//   console.log(`Goal ${goalNumber + 1}: ${player}`);
// }

// let result = 0;
// for (const odd of Object.values(game.odds)) {
//   result += odd;
// }
// console.log(result / Object.values(game.odds).length);

// for (let [key, value] of Object.entries(game.odds)) {
//   const teamStr = key === "x" ? "draw" : `victory ${game[key]}`;
//   console.log(`Odd of ${teamStr} ${value}`);
// }

//Sets

// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);
// console.log(ordersSet);

// console.log(new Set("Jonas"));

// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Bread"));
// ordersSet.add("Garlic Bread");
// ordersSet.delete("Pizza");
// //ordersSet.clear()

// console.log(ordersSet);
// for (const order of ordersSet) console.log(order);

// const staff = ["Waiter", "Chef", "Manager", "Chef", "Waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff).size);

// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firence, Italy");
// rest.set(rest.set(2, "Lisbon, Portugal"));
// console.log(rest);
// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open")
//   .set(false, "We are closed");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);
// const arr = [1, 2];
// rest.set(arr, "Test");
// console.log(rest.set(document.querySelector("h1"), "Heading"));
// console.log(rest);
// console.log(rest.size);

// //rest.clear()
// console.log(rest.get(arr));

// const question = new Map([
//   ["question", "what is the best progrmming language"],
//   [1, "C"],
//   [2, "Java Script"],
//   [3, "Java"],
//   ["correct", 2],
//   [true, "Correct"],
//   [false, "Try Again"],
// ]);

// console.log(question);

// //convert Objects to maps
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt("Your Answer"));
// console.log(answer);
// console.log(question.get(question.get("correct") === answer));

// // convert Map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

//Practice 3

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// for (const [min, events] of gameEvents) {
//   const result =
//     min <= 45
//       ? `[FIRST HALF] ${min}: ${events}`
//       : `[SECOND HALF] ${min}: ${events}`;
//   console.log(result);
// }

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// console.log(
//   `An event happened on average every ${90 / gameEvents.size} minutes`
// );

// const time = [...gameEvents.keys()].pop();
// console.log(time);

// Working with Strings

// const airline = "TAP Air Portugal";
// const plane = "A320";
// console.log(plane[1]);
// console.log(airline.length);
// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("Portugal"));
// console.log(airline.slice(4));...................................................
// console.log(airline.slice(4, 7));
// console.log(airline.slice(-1));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ")).trim());

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   s === "B" || s === "E"
//     ? console.log("You got the middle seat💥")
//     : console.log("You are lucky👏");
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("11E");

// console.log(airline.toLowerCase());

// //Fix captilization in name

// const passenger = "jONas";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //Comparing emails

// const email = "hello@jonas.io";
// const loginEmail = "  Hello@Jonas.IO\n";

// const lowerEmail = loginEmail.toLowerCase().trim();

// console.log(lowerEmail);

// //replacing
// const priceGB = "288,97E";
// const priceUS = priceGB.replace("E", "$").replace(",", ".");
// console.log(priceUS);

// const announcement = "All passengers come to boarding door 23.boarding door 23";
// console.log(announcement.replace("door", "gate"));
// console.log(announcement.replace(/door/g, "gate"));

// const planes = "Airbus A320neo";
// console.log(planes.includes("A320"));
// console.log(planes.includes("Boeing"));
// console.log(planes.startsWith("A320"));

// if (planes.startsWith("Airbus") && planes.endsWith("neo"))
//   console.log("Part of the new Airbus family");

// console.log("a+very+nice+string".split("+"));
// console.log("a+very+nice+string".split(""));

// const [firstName, lastName] = "John Smith".split(" ");
// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// const captilizeName = function (name) {
//   const name2 = name.split(" ");
//   const namesUpper = [];
//   for (const n of name2) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(" "));
// };

// captilizeName("john smith");

// const message = "Go to gate 23!";
// console.log(message.padStart(25, "+").padEnd(30, "+"));
// console.log(message.padEnd(25, "+").length);

// const maskCredtCard = function (number) {
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };

// console.log(maskCredtCard(12345678));

// const message1 = "Bad weather, all departures delayed... ";
// console.log(message1.repeat(5));

// document.body.append(document.createElement("textarea"));
// const button = document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const data = text.split("\n");

//   for (const [i, row] of data.entries()) {
//     const [first, second] = row.toLowerCase().trim().split("_");
//     const output = `${first} ${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
//   }
// });

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// for (const flight of flights.split("+")) {
//   const [type, from, to, time] = flight.split(";");
//   let data = `${type.startsWith("_Delayed") ? "⛔" : " "} ${type.replace(
//     /_/g,
//     " "
//   )} from ${from.slice(0, 3).toUpperCase()} to ${to
//     .slice(0, 3)
//     .toUpperCase()} (${time.replace(":", "h")})`;
//   console.log(data.padStart(55, " "));
// }

// const students = [
//   { name: "Quincy", grade: 1, score: 65 },
//   { name: "Jessie", grade: 2, score: 67 },
//   { name: "Alexis", grade: 1, score: 76 },
//   { name: "Sam", grade: 1, score: 98 },
//   { name: "Katie", grade: 2, score: 87 },
// ];

// const studentsUpdated = students
//   .map((item) => {
//     item.grade === 1 ? (item.gender = "M") : (item.gender = "F");
//     return item;
//   })
//   .filter((item) => {
//     return item.grade == 1;
//   })
//   .reduce((count, item) => {
//     var avg = count + item.score;
//     return (item.average = avg);
//   }, 0);
// console.log(studentsUpdated);
// console.log(students);

// const numbers = [1, 2, 3, 4];
// const doubled = numbers
//   .map((item) => item * 2)
//   .filter((item) => {
//     return item >= 6;
//   })
//   .reduce((count, num) => {
//     return count + num;
//   }, 0);
// console.log(doubled); // [2, 4, 6, 8]

var templateRequest = []
var uniqueExecutionId = "test"
var vlanConfigRequests = [
  {
    "blc": "DC1-011",
    "device": "USCAIRVGW02FIE0011",
    "request-type": "Add",
    "vlan-id": "805",
    "stp-priority": "4096"
  },
  {
    "blc": "DC1-011",
    "device": "USCAIRVGW02FIE0011",
    "request-type": "Add",
    "vlan-id": "901",
    "stp-priority": "4096",
    "add-vlan-to-trunk": true,
    "trunk-interfaces": [
      "GigabitEthernet1/0/47",
      "GigabitEthernet1/0/11"
    ]
  },
  {
    "blc": "DC1-011",
    "device": "USCAIRVGW02FIE0011",
    "request-type": "Add",
    "vlan-id": "989",
    "stp-priority": "4096",
    "add-vlan-to-trunk": true,
    "trunk-interfaces": [
      "GigabitEthernet1/0/12"
    ]
  }
]
var failedInterfaces = ["GigabitEthernet1/0/47"]
var failedVlansWithSuccessTrunkInterfaces= []

// var vlanConfigRequests = JSON.parse(vlanConfigRequests);
console.log(uniqueExecutionId + "failedVlansWithSuccessTrunkInterfaces::"+failedVlansWithSuccessTrunkInterfaces);
console.log(uniqueExecutionId + " failedInterfaces::"+failedInterfaces);
if(vlanConfigRequests.length > 0){
    for(var i=0; i < vlanConfigRequests.length; i++){
        var vlanConfigRequest = vlanConfigRequests[i];
        if(vlanConfigRequest['add-vlan-to-trunk']){
            for(var j=0; j < vlanConfigRequest['trunk-interfaces'].length; j++){
                var trunkInterface = vlanConfigRequest['trunk-interfaces'][j];
                console.log(uniqueExecutionId + "trunkInterface:"+trunkInterface);
                var parsedFailedVLANsWithSuccessTrunkInterfaces = failedVlansWithSuccessTrunkInterfaces;
                var parsedFailedInterfaces = failedInterfaces;
                console.log(uniqueExecutionId + " JSON parse failedVlansWithSuccessTrunkInterfaces:"+parsedFailedVLANsWithSuccessTrunkInterfaces);
                console.log(uniqueExecutionId + " parsedFailedVLANsWithSuccessTrunkInterfaces length:"+parsedFailedVLANsWithSuccessTrunkInterfaces.length);
                console.log(uniqueExecutionId + "JSON parse failedInterfaces:"+parsedFailedInterfaces);
                console.log(uniqueExecutionId + "parsedFailedInterfaces length:"+parsedFailedInterfaces.length);
                if((parsedFailedVLANsWithSuccessTrunkInterfaces.length == 0 || parsedFailedVLANsWithSuccessTrunkInterfaces.indexOf(trunkInterface) == -1) && (parsedFailedInterfaces.length == 0 || parsedFailedInterfaces.indexOf(trunkInterface) == -1) ){
                    console.log(uniqueExecutionId + "VLAN and its trunk interfaces succeeded");
                    var trunkVariableMap = {
                        "vlanId": vlanConfigRequest['vlan-id'],
                        "trunkInterface": trunkInterface
                    };
                    templateRequest.push({
                        deviceName: vlanConfigRequest.device,
                        // templateId: BranchModifySwitchPostChangeValidateAddVlanTrunk,
                        variableMap: trunkVariableMap
                    });
                } else {
                    console.log(uniqueExecutionId + "VLAN is failed but Trunk Interfacs succeeded");
                }
            }
        }
    }
} 

console.log(templateRequest);