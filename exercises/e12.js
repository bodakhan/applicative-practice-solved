import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  // Your code goes here...
  let moonCountArray = data.planets
    .filter(planet => planet.moons != undefined)
    .map(planet => planet.moons.length)
    .reduce((acc, cur) => acc + cur, 0);
  return moonCountArray;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
