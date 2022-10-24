const tourist = prompt("Hey tourist! What's your name?");
let cities = ""
let score = 0

let next = prompt("Have you ever visited any city? (Yes / No)");

while (next === "Yes") {
  let city = prompt("What is the name of the city visited?")
  cities += " - " + city + "\n"
  score++
  next = prompt("Have you ever visited another city? (Yes / No)");
}

alert (
  "Tourist: " + tourist +
  "\nNumber of cities visited: " + score +
  "\nCities visited:\n " + cities
)
