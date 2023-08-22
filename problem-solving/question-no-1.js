console.log("Question No 1");
document.getElementById("is_not_palindrome").style.display = "none";
document.getElementById("is_palindrome").style.display = "none";
document.getElementById("is_palindrome_error").style.display = "none";

// const result = isPalindrome("A man, a plan, a canal, Panama!");
// const result2 = isPalindrome("Hello, world!");

function isPalindrome() {
  let testText = document.getElementById("palindrome_text").value;
  document.getElementById("is_not_palindrome").style.display = "none";
  document.getElementById("is_palindrome").style.display = "none";
  document.getElementById("is_palindrome_error").style.display = "none";
  if (testText.length > 0) {
    // Remove Whitespace And Special Characters for The ((testText))
    let plainText = testText.replace(/[-, ."'`!@#$_%^&*()0-9]/g, "");
    console.log({ plainText });
    if (plainText.length > 0) {
      // Implement toLowerCase() on The ((plainText))
      let lowerCasePlainText = plainText.toLowerCase();
      console.log({ lowerCasePlainText });

      // Implement reverse() on The ((lowerCasePlainText))
      let reverseLowerCasePlainText = lowerCasePlainText
        .split("")
        .reverse()
        .join("");
      console.log({ reverseLowerCasePlainText });

      if (lowerCasePlainText === reverseLowerCasePlainText) {
        document.getElementById("is_palindrome").style.display = "inline-block";
        return true;
      } else {
        document.getElementById("is_not_palindrome").style.display =
          "inline-block";
        return false;
      }
    } else {
      document.getElementById("is_not_palindrome").style.display =
        "inline-block";
      return false;
    }
  } else {
    document.getElementById("is_palindrome_error").style.display =
      "inline-block";
  }
}
