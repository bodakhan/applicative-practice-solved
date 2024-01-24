/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let count = [];
  let yearArray = data.asteroids
    .map(ace => ace.discoveryYear);
  for(let j = 0; j < yearArray.length; j++) {
    if(count.length == 0) {
      count[0] = ( {year: yearArray[j], counT: 0} );
    };
    for(let l = 0; l < count.length; l++) {
      if(l == count.length - 1 && count[l].year != yearArray[j]) {
        count.push({year: yearArray[j], counT: 1});
      } else if (count[l].year == yearArray[j]) {
        count[l].counT++;
      };
    };
  };
  let greatest = maxBy(count, b => b.counT);
  return greatest.year;
}

function maxBy(array, cb) {
  // Your code goes here...
  if(array.length == 0) {
    return undefined;
  }
  let value = array[0];
  for(let element of array) {
    if(cb(element) > cb(value)) {
      value = element;
    } else {
      continue;
    };
  };
  return value;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
