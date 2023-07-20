// console.log(40 + 8 - 23);
// console.log('jonas');
// console.log(23);

// let firstName = 'Matilda';
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let $years = 3;

// let country = \\\\\"India\\\\\";
// let continent = \\\\\"Asia\\\\\";
// let population = 1340000000;
// console.log(country, \\\\\",\\\\\", continent, \\\\\", \\\\\", population);

// console.log(true);
// let javaScript = true;
// console.log(javaScript);
// console.log(typeof 'jonas');

// javaScript = 'jonas';
// console.log(javaScript);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1994;
// console.log(typeof year);

// console.log(typeof null);
// console.log(typeof undefined);

// const markWeight = 78;
// const markHeight = 1.69;

// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// const markHigherBMI = markBMI > johnBMI

// console.log(markHigherBMI);

// const firstName = 'John';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2021;

// const result = \\\\\"I'm \\\\\" + firstName + \\\\\", a \\\\\" + (year - birthYear) + ' Years old ' + job + '!'

// console.log(result);

// const resultNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// console.log(resultNew);

// console.log('String with \n\
// multiple \n\
// lines \n\
// ');

// console.log(`String
// with multiple
// lines`);

// const age = 15;

// if (age >= 19) {
//     console.log(\\\\\"You can get driving license😊\\\\\");
// } else {
//     const yearsLeft = 19 - age;
//     console.log(`Please wait for ${yearsLeft} years`);
// }

//

// const inputYear = '1991';
// console.log(Number(inputYear) + 18);

// console.log(Number('John')); // NaN
// console.log(typeof NaN); // Number

// console.log(23 + 'Years old');
// console.log('23' - '10' - 3); //10
// console.log('23' + '10' + 3); //23103
// console.log('23' / '2'); //11.5
// console.log('23' > 18); // true
// console.log('23' > '18'); // true

// 5 falsy values:0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('john'));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean({}));
// console.log(Boolean([]));

// const favourite = Number(prompt(`What's your guess: `))
// console.log(favourite);
// console.log(typeof favourite);
// if (favourite === 23) {
//     console.log(`${favourite} is correct guess`);
// }
// else if (favourite === 7) {
//     console.log(`${favourite} is also correct guess`);
// }
// else {
//     console.log(`Guess is wrong`);
// }

// team1Avg = (99 + 101 + 110) / 3
// team2Avg = (98 + 101 + 110) / 3
// console.log(team1Avg, team2Avg);
// if (team1Avg > team2Avg) console.log(`team 1 is the winner👏`);
// else if (team2Avg > team1Avg) console.log(`team 2 is the winner`);
// else console.log('both teams avg is same');

// team1Avg = (60 + 101 + 112) / 3
// team2Avg = (60 + 101 + 111) / 3
// console.log(team1Avg, team2Avg);
// if (team1Avg > team2Avg && team1Avg >= 100) console.log(`team 1 is the winner👏`);
// else if (team2Avg > team1Avg && team2Avg >= 100) console.log(`team 2 is the winner👏`);
// else if (team1Avg === team2Avg && team1Avg >= 100 && team2Avg >= 100) console.log('both teams win');
// else console.log(`no team wins`);

// const day = 'saturday';
// switch (day) {
//     case 'monday':
//         console.log('course structure');
//         break;
//     case 'tuesday':
//         console.log('prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code examples');
//         break;
//     case 'friday':
//         console.log('record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy weekend');
//         break;
//     default:
//         console.log('Not a valid day');;
//         break;
// }

//conditional(ternary) operator
// const age = 23;
// // age >= 18 ? console.log('you will get voter card') : console.log('please wait till you are 18 years old');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) drink2 = 'wine';
// else drink2 = 'water';
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// let tip;
// const bill = 430;

// tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`Bill is ${bill}, tip is ${tip} and final bill is ${bill + tip}`);

// Activating strict mode in JS
// 'use strict';
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive`);

// 'use strict';

// function logger() {
//     console.log('My name is Jonas');
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age2);

//Arrow Function

// const calcAge3 = birthYear => 2017 - birthYear

// const age3 = calcAge3(1991)
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement}`
// }

// console.log(yearsUntilRetirement(1991, `Jonas`));

// function cutFruitProeces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitProeces(apples);
//     const orangePieces = cutFruitProeces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const calAge = yearOfBirth => 2037 - yearOfBirth;

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = calAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement}`
//     }
//     else {
//         return -1;
//     }

// }

// console.log(yearsUntilRetirement(1991, 'john'));

// const calcAverage = (val1, val2, val3) => (val1 + val2 + val3) / 3;

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins > 2 * avgKoalas) {
//         console.log(`Team Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     }
//     else if (avgKoalas > 2 * avgDolphins) {
//         console.log(`Team Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     }
//     else {
//         console.log(`No team Wins`);
//     }
// }

// const scoreDolphins = calcAverage(25, 33, 45)
// const scoreKoalas = calcAverage(85, 54, 98)
// console.log(scoreDolphins, scoreKoalas);
// const matchStatus = checkWinner(scoreDolphins, scoreKoalas)
// // console.log(matchStatus);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2000, 2010, 2018]
// var year;
// for (year of years) {
//     console.log(calcAge(year));
// }

// for (var year = 0; year < years.length; year++) {
//     console.log(calcAge(years[year]))
// }

// const friends = ['Michael', 'Steven', 'Peter']

// const newLength = friends.push('Jay')
// console.log(newLength);
// console.log(friends);

// friends.unshift('John');
// console.log(friends);

// const popped = friends.pop()
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.includes('Steven'));

// let tip;
// const calcTip = bill => {

//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 0.15;
//         return tip;
//     }
//     else {
//         tip = bill * 0.20;
//         return tip;
//     }
// }

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// console.log(calcTip(100));
// const bills = [50, 100, 150, 300, 350, 10];
// var bill;
// const tips = []
// const total = []
// for (bill of bills) {
//     tips.push(calcTip(bill));
//     total.push(bill + calcTip(bill));
// }
// console.log(tips);
// console.log(total);

// const jonas = { firstName: 'Jonas', lastName: 'Schmedmann', age: 2037 - 1991, job: 'teacher', friends: ['Michael', 'Peter', 'Steven'] };
// console.log(jonas.firstName);
// console.log(jonas['firstName']);

// const nameKey = 'Name';
// console.log(jonas['last' + nameKey]);
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// console.log(`Jonas has ${jonas.friends.length}, and his best friend is ${jonas.friends[0]}`);

// const jonas = {
//     firstName: 'Jonas', lastName: 'Schmedmann', birthYear: 1991, job: 'teacher', friends: ['Michael', 'Peter', 'Steven'], hasDriverLicense: true,
// calcAge: function (birthYear) {
//     return 2037 - birthYear;
// }
// calcAge: function () {
//     return 2037 - this.birthYear;
// },
// bestFriend: function () {
//     return this.friends[0]
// },
// calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
// },
// getSummary: function () {
//     if (this.hasDriverLicense)
//         return `${this.firstName} is a ${this.calcAge()}-old teacher, and he has a driver license`;
//     else return `${this.firstName} is a ${this.calcAge()}-old teacher, and he has no driver license`;
// }
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-years old ${jonas.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license`;
//     }
// };

// console.log(jonas.calcAge());

// console.log(jonas.bestFriend());
// console.log(jonas['age']);
// console.log(jonas.age);
// console.log(jonas.getSummary())
// console.log(jonas['calcAge'](1991));

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     fullName: function () {
//         return `${[this.firstName, this.lastName].join(\\\\\" \\\\\")}`
//     },
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.markBMI = this.mass / (this.height * this.height)
//         return this.markBMI
//     }

// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     fullName: function () {
//         return `${[this.firstName, this.lastName].join(\\\\\" \\\\\")}`
//     },
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.johnBMI = this.mass / (this.height * this.height)
//         return this.johnBMI
//     }

// }

// console.log(mark.fullName());
// console.log(mark.calcBMI())
// console.log(mark.markBMI);
// console.log(john.fullName());
// console.log(john.calcBMI())
// console.log(john.johnBMI);

// console.log(`${mark.fullName()}'s BMI (${mark.markBMI}) is higher than ${john.fullName()}'s (${john.johnBMI})`)

// const str = \\\\\"Mark Miller\\\\\"
// console.log(str.split(\\\\\" \\\\\").join(\\\\\" \\\\\"));

// const jonasArray = [\\\\\"Jonas\\\\\", 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']]

// const types = []
// for (let ele of jonasArray) {
//     console.log(ele, typeof ele);
//     types.push(typeof ele)
// }

// for (let i = 0; i <= jonasArray.length; i++) {
//     console.log(jonasArray[i]);
// }

// console.log(types);

// const jonasArray = [\\\\\"Jonas\\\\\", 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']]

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//     console.log(jonasArray[i]);
// }
// let i = 0;
// while (i >= jonasArray.length - 1) {
//     console.log(jonasArray[i]);
//     i++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(\\\\\"Loop is about to end.....\\\\\");
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []

// const calcTip = function (bill) {
//     return bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
// }

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i])
//     tips.push(tip)
//     totals.push(bills[i] + tip)
// }

// console.log(tips, totals)

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//         // console.log(sum)
//     }
//     return sum / arr.length

// }

// console.log(calcAverage(totals))

'use strict';

// const xyzabc = 23;
// console.log(xyzabc);

// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [10, -9, -12, -13, 'error', 9, 13, 27, 35, 64, 19, 15];

// const tempAmplitude = function (temp1, temp2) {
//   const temps = temp1.concat(temp2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// };

// console.log(tempAmplitude(temperatures1, temperatures2));

// const tempConversion = function () {
//   const measurement = {
//     type: 'temperature',
//     unit: 'celsius',
//     value: prompt('Enter the temperature value:'),
//   };
//   const kelvin = 273 + measurement.value;
//   return kelvin;
// };

// console.log(tempConversion());

// const temperature = [17, 21, 45];

// const printForecast = function (temp) {
//   let str = '';
//   for (let i = 0; i < temp.length; i++) {
//     str = str + ` ... ${temp[i]}C in ${i + 1} days`;
//   }
//   return str;
// };

// console.log(printForecast(temperature));

// console.log(
//   JSON.stringify({
//     baseUrl: 'https://10.106.36.82:30101/bpa',
//     jwt_username: 'admin',
//     jwt_pswd: 'admin',
//     postRequestPayload: {
//       agentInfo: {
//         'host-name': 'dcnm-agent-service',
//         'agent-name': 'DCNM Controller Agent',
//         'agent-id': 'c2e13ad0-cf61-11eb-86c6-d97fc410563b9',
//         'controller-type': 'DCNM1',
//         'base-URL': '/api/v1.0/dcnm-controller-agent/',
//         'health-check-URI': '/api/v1.0/dcnm-controller-agent/ping',
//         'status-URI': '/api/v1.0/dcnm-controller-agent/status',
//         'controller-edit-form': 'DCNM-Controller-Edit',
//         port: 9532,
//         scheme: 'https',
//         status: 'Up',
//       },
//       capabilities: [
//         {
//           internalName: 'info',
//           displayName: 'Controller Info',
//           controllerVersion: '11.5.1',
//           appName: 'device-manager',
//           agentApiVersion: '1.0',
//         },
//         {
//           internalName: 'status',
//           displayName: 'Controller Status',
//           controllerVersion: '11.5.1',
//           appName: 'device-manager',
//           agentApiVersion: '1.0',
//         },
//         {
//           internalName: 'ping',
//           displayName: 'Ping',
//           controllerVersion: '11.5.1',
//           appName: 'device-manager',
//           agentApiVersion: '1.0',
//         },
//         {
//           internalName: 'view-config',
//           displayName: 'View Config',
//           controllerVersion: '11.5.1',
//           appName: 'device-manager',
//           agentApiVersion: '1.0',
//         },
//         {
//           internalName: 'get-config',
//           displayName: 'Get Config',
//           controllerVersion: '11.5.1',
//           appName: 'template-manager',
//           agentApiVersion: '1.0',
//         },
//         {
//           internalName: 'check-sync',
//           displayName: 'Check Sync',
//           controllerVersion: '11.5.1',
//           appName: 'device-manager',
//           agentApiVersion: '1.0',
//         },
//         {
//           internalName: 'sync-to',
//           displayName: 'Sync To',
//           controllerVersion: '11.5.1',
//           appName: 'device-manager',
//           agentApiVersion: '1.0',
//         },
//         {
//           internalName: 'devices',
//           displayName: 'Get Devices',
//           controllerVersion: '11.5.1',
//           appName: 'device-manager',
//           agentApiVersion: '1.0',
//         },
//         {
//           internalName: 'get-devices-hierarchy',
//           displayName: 'Get Devices Hierarchy',
//           controllerVersion: '11.5.1',
//           appName: 'device-manager',
//           agentApiVersion: '1.0',
//         },
//         {
//           internalName: 'get-process-templates',
//           displayName: 'Get Process Templates',
//           controllerVersion: '11.5.1',
//           appName: 'template-manager',
//           agentApiVersion: '1.0',
//         },
//         {
//           internalName: 'execute-process-templates',
//           displayName: 'Execute Process Templates',
//           controllerVersion: '11.5.1',
//           appName: 'template-manager',
//           agentApiVersion: '1.0',
//         },
//         {
//           internalName: 'get-templates',
//           displayName: 'Get GCT',
//           controllerVersion: '11.5.1',
//           appName: 'template-manager',
//           agentApiVersion: '1.0',
//         },
//         {
//           internalName: 'execute-gct',
//           displayName: 'Execute Golden Config Templates',
//           controllerVersion: '11.5.1',
//           appName: 'template-manager',
//           agentApiVersion: '1.0',
//         },
//         {
//           internalName: 'create-gct',
//           displayName: 'Create Golden Config Template',
//           controllerVersion: '11.5.1',
//           appName: 'template-manager',
//           agentApiVersion: '1.0',
//         },
//         {
//           internalName: 'update-gct',
//           displayName: 'Update Golden Config Template',
//           controllerVersion: '11.5.1',
//           appName: 'template-manager',
//           agentApiVersion: '1.0',
//         },
//         {
//           internalName: 'delete-gct',
//           displayName: 'Delete Golden Config Template',
//           controllerVersion: '11.5.1',
//           appName: 'template-manager',
//           agentApiVersion: '1.0',
//         },
//       ],
//       forms: [
//         {
//           formName: 'DCNM|1.0|template-manager|create-template',
//           formData: [
//             {
//               formType: 'Generic Form',
//               enableImport: false,
//               showV2: false,
//               dataTypeSettings: false,
//               name: 'DCNM|1.0|template-manager|create-template',
//               nso_instance: null,
//               service: null,
//               formSchema: {
//                 nodeType: 'container',
//               },
//             },
//           ],
//         },
//         {
//           formName: 'DCNM|1.1|template-manager|create-template',
//           formData: [
//             {
//               formType: 'Generic Form',
//               enableImport: false,
//               showV2: false,
//               dataTypeSettings: false,
//               name: 'DCNM|1.1|template-manager|create-template',
//               nso_instance: null,
//               service: null,
//               formSchema: {
//                 nodeType: 'container',
//               },
//             },
//           ],
//         },
//         {
//           formName: 'DCNM|1.0|template-manager|apply-template',
//           formData: [
//             {
//               formType: 'Generic Form',
//               enableImport: false,
//               showV2: false,
//               dataTypeSettings: false,
//               name: 'DCNM|1.0|template-manager|apply-template',
//               nso_instance: null,
//               service: null,
//               formSchema: {
//                 nodeType: 'container',
//               },
//             },
//           ],
//         },
//         {
//           formName: 'DCNM|1.1|template-manager|apply-template',
//           formData: [
//             {
//               formType: 'Generic Form',
//               enableImport: false,
//               showV2: false,
//               dataTypeSettings: false,
//               name: 'DCNM|1.1|template-manager|apply-template',
//               nso_instance: null,
//               service: null,
//               formSchema: {
//                 nodeType: 'container',
//               },
//             },
//           ],
//         },
//       ],
//       metadata: {
//         osTypes: ['IOS', 'IOS-XR'],
//         deviceTypes: ['AUH', 'XR-Device'],
//       },
//     },
//   })
// );

// ('{"baseUrl":"https://10.106.36.82:8000/rest/","jwt_username":"admin","jwt_pswd":"admin","postRequestPayload":{"genPayload":{"agentInfo":{"host-name":"dcnm-agent-service","agent-name":"DCNM Controller Agent","agent-id":"c2e13ad0-cf61-11eb-86c6-d97fc410563b9","controller-type":"DCNM1","base-URL":"/api/v1.0/dcnm-controller-agent/","health-check-URI":"/api/v1.0/dcnm-controller-agent/ping","status-URI":"/api/v1.0/dcnm-controller-agent/status","controller-edit-form":"DCNM-Controller-Edit","port":9532,"scheme":"https","status":"Up"},"capabilities":[{"internalName":"info","displayName":"Controller Info","controllerVersion":"11.5.1","appName":"device-manager","agentApiVersion":"1.0"},{"internalName":"status","displayName":"Controller Status","controllerVersion":"11.5.1","appName":"device-manager","agentApiVersion":"1.0"},{"internalName":"ping","displayName":"Ping","controllerVersion":"11.5.1","appName":"device-manager","agentApiVersion":"1.0"},{"internalName":"view-config","displayName":"View Config","controllerVersion":"11.5.1","appName":"device-manager","agentApiVersion":"1.0"},{"internalName":"get-config","displayName":"Get Config","controllerVersion":"11.5.1","appName":"template-manager","agentApiVersion":"1.0"},{"internalName":"check-sync","displayName":"Check Sync","controllerVersion":"11.5.1","appName":"device-manager","agentApiVersion":"1.0"},{"internalName":"sync-to","displayName":"Sync To","controllerVersion":"11.5.1","appName":"device-manager","agentApiVersion":"1.0"},{"internalName":"devices","displayName":"Get Devices","controllerVersion":"11.5.1","appName":"device-manager","agentApiVersion":"1.0"},{"internalName":"get-devices-hierarchy","displayName":"Get Devices Hierarchy","controllerVersion":"11.5.1","appName":"device-manager","agentApiVersion":"1.0"},{"internalName":"get-process-templates","displayName":"Get Process Templates","controllerVersion":"11.5.1","appName":"template-manager","agentApiVersion":"1.0"},{"internalName":"execute-process-templates","displayName":"Execute Process Templates","controllerVersion":"11.5.1","appName":"template-manager","agentApiVersion":"1.0"},{"internalName":"get-templates","displayName":"Get GCT","controllerVersion":"11.5.1","appName":"template-manager","agentApiVersion":"1.0"},{"internalName":"execute-gct","displayName":"Execute Golden Config Templates","controllerVersion":"11.5.1","appName":"template-manager","agentApiVersion":"1.0"},{"internalName":"create-gct","displayName":"Create Golden Config Template","controllerVersion":"11.5.1","appName":"template-manager","agentApiVersion":"1.0"},{"internalName":"update-gct","displayName":"Update Golden Config Template","controllerVersion":"11.5.1","appName":"template-manager","agentApiVersion":"1.0"},{"internalName":"delete-gct","displayName":"Delete Golden Config Template","controllerVersion":"11.5.1","appName":"template-manager","agentApiVersion":"1.0"}],"forms":[{"formName":"DCNM|1.0|template-manager|create-template","formData":[{"formType":"Generic Form","enableImport":false,"showV2":false,"dataTypeSettings":false,"name":"DCNM|1.0|template-manager|create-template","nso_instance":null,"service":null,"formSchema":{"nodeType":"container"}}]},{"formName":"DCNM|1.1|template-manager|create-template","formData":[{"formType":"Generic Form","enableImport":false,"showV2":false,"dataTypeSettings":false,"name":"DCNM|1.1|template-manager|create-template","nso_instance":null,"service":null,"formSchema":{"nodeType":"container"}}]},{"formName":"DCNM|1.0|template-manager|apply-template","formData":[{"formType":"Generic Form","enableImport":false,"showV2":false,"dataTypeSettings":false,"name":"DCNM|1.0|template-manager|apply-template","nso_instance":null,"service":null,"formSchema":{"nodeType":"container"}}]},{"formName":"DCNM|1.1|template-manager|apply-template","formData":[{"formType":"Generic Form","enableImport":false,"showV2":false,"dataTypeSettings":false,"name":"DCNM|1.1|template-manager|apply-template","nso_instance":null,"service":null,"formSchema":{"nodeType":"container"}}]}],"metadata":{"osTypes":["IOS","IOS-XR"],"deviceTypes":["AUH","XR-Device"]}}}}');
