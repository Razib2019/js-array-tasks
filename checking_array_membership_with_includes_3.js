/*
Instructions:
    1. Create an array of books containing different book.
    2. Use the includes method to check if the array contains a javascript book.
    3. Print a message to the console indicating whether the element is present in the array or not.
*/

const books = [
  "C",
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "Ruby",
  "Story Telling",
  "Cooking",
];

const result = books.includes("JavaScript");
if (result) {
  console.log("Yes, JavaScript Book Is Present In The Array");
} else {
  console.log("No, JavaScript Book Is Not Present In The Array");
}
