console.log("Question No 2");
document.getElementById("is_not_prime_number").style.display = "none";
document.getElementById("is_prime_number").style.display = "none";
document.getElementById("is_prime_number_error").style.display = "none";

function isPrimeNumber() {
  let testNumber = +document.getElementById("prime_number").value;

  document.getElementById("is_not_prime_number").style.display = "none";
  document.getElementById("is_prime_number").style.display = "none";
  document.getElementById("is_prime_number_error").style.display = "none";

  if (testNumber <= 0) {
    document.getElementById("is_not_prime_number").style.display =
      "inline-block";
  } else {
    for (let i = testNumber - 1; i > 1; i--) {
      if (testNumber % i == 0) {
        document.getElementById("is_not_prime_number").style.display =
          "inline-block";
        return false;
      }
    }
    document.getElementById("is_prime_number").style.display = "inline-block";
    return true;
  }
}
