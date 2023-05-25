function checkString(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "a") {
        for (let j = i + 1; j < str.length; j++) {
          if (str[j] === "b" && j - i >= 3) {
            return true;
          }
        }
      } else if (str[i] === "b") {
        for (let j = i + 1; j < str.length; j++) {
          if (str[j] === "a" && j - i >= 3) {
            return true;
          }
        }
      }
    }
    return false;
  }

  console.log(checkString("lan borrowed"));  // true
  console.log(checkString("I am sick"));  // false
  console.log(checkString("you are boring"));  // true
  console.log(checkString("barbarian"));  // true
  console.log(checkString("bacon and meat")); //  false