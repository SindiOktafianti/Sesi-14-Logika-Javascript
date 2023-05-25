function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

  console.log(reverseString("Hello World and Coders"));
  console.log(reverseString("John Doe"));
  console.log(reverseString("I am a bookworm"));
  console.log(reverseString("Coding is my hobby"));
  console.log(reverseString("Super"));