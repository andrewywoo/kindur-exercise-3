/*
    Example: node perm-x.js 01X10X
    Result: 010100 
            010101
            011100
            011101

    Breakdown: the question can be broken down to asking about all the permutations of 1s and 0s given the length n where n is the number of Xs
                the above example can be broken down to n = 2 where the possible permutations are
                00, 01, 10, 11
                We can solve for this solution and replace the X's in the string when passing back the result set.
                Runtime: O(2^n)
*/
function replaceX(str) {
  //Validate argument
  if (!str) {
    return "Invalid Argument";
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0" && str[i] !== "1" && str[i] !== "X") {
      return "Invalid Argument";
    }
  }

  const argArr = str.split("");
  let xCount = 0;

  //Count how many Xs
  argArr.forEach(c => {
    if (c === "X") xCount++;
  });

  //theres 2^n possible permutation for 0s and 1s
  const permNumber = Math.pow(2, xCount);

  //create permutation list and pad 0s to numbers of Xs
  let permList = [];
  for (let i = 0; i < permNumber; i++) {
    let binary = i.toString(2);
    if (binary.length !== xCount) {
      binary = binary.padStart(xCount, "0");
    }
    permList.push(binary);
  }

  //map result using permList.
  const result = permList.map(e => {
    //replace each X with 0s and 1s
    let newNumber = "";
    let eArr = e.split("");
    let count = 0;

    argArr.forEach(i => {
      if (i === "X") {
        newNumber += eArr[count];
        count++;
      } else {
        newNumber += i;
      }
    });
    return newNumber;
  });

  return result;
}

module.exports = replaceX;
