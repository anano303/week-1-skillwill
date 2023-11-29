// function number(a, b) {
//   if (a == b) {
//     return "ტოლია";
//   } else {
//     return "მცდარია";
//   }
// }

// let result = number(5, "5");
// console.log(result);

// function fahrenheitToCelsius(fahrenheit) {
//   if (typeof fahrenheit !== "number") {
//     return false;
//   } else {
//     let celsius = (fahrenheit - 32) * (5 / 9);
//     return celsius;
//   }
// }

// let fahrenheitTemperature = 64;
// let celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);

// if (celsiusTemperature !== false) {
//   console.log(
//     fahrenheitTemperature + "°F არის " + celsiusTemperature.toFixed(2) + "°C"
//   );
// } else {
//   console.log("არასწორია,გთხოვთ შეიყვანოთ რიცხვითი მნიშვნელობა.");
// }

// function performOperation(a, b, operation) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return false; // If a or b is not a number, return false
//   }

//   if (operation === "+") {
//     return a + b;
//   } else if (operation === "-") {
//     return a - b;
//   } else if (operation === "*") {
//     return a * b;
//   } else if (operation === "/") {
//     if (b !== 0) {
//       return a / b;
//     } else {
//       return "გაყოფის შეცდომა: ნულით გაყოფა არ შეიძლება";
//     }
//   } else {
//     return false;
//   }
// }
// let a = 10;
// let b = 13;
// let operation = "*";
// let result = performOperation(a, b, operation);

// if (result !== false) {
//   console.log(`შედეგი: ${result}`);
// } else {
//   console.log("შეცდომა, არასწორი ოპერაცია");
// }
