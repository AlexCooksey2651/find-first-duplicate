function findFirstDuplicate(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArray.includes(arr[i])) {
      return arr[i]
    } else {
      newArray.push(arr[i])
    }
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: -1');
  console.log("=>", findFirstDuplicate([]))

  console.log('Expecting: -1');
  console.log("=>", findFirstDuplicate([-1, 3, 5, -1, 7, 2, 2]))

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
// IN OWN WORDS:
// Detecting if values are unique, or if they already exist. Once a value already exists in the array, return that value. 
// Can iterate over the array and add it to new array. If the new array already includes a value, return that value. If have looped over entire array without already returning something, return -1. 

// create empty array
// iterate through length of arrayl if new array includes current value, return value
// else push into new array
// if nothing returned, return -1


