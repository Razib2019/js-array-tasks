/*
Instructions:
    1. Create different variables, each containing either an array or a non-array value.
    2. Now use isArray to check if each variable is an array.
    3. Print a message to the console indicating whether each variable is an array or not.
*/

const places = ["Sundarban", "Bandarban", "Saint Martin"];
const price = 300;
const useName = "Razib";
const fruits = ["Banana", "Apple", "Grape", "Guava", "Malta"];

if (
  Array.isArray(places) &&
  Array.isArray(price) &&
  Array.isArray(useName) &&
  Array.isArray(fruits)
) {
  console.log("Yes, Each Variable is an Array");
} else {
  {
    console.log("No, Each Variable is not an Array");
  }
}
