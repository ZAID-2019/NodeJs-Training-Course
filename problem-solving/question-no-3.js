console.log("Question No 3");

document.getElementById("result_alert").style.display = "none";


function reverseString() {
  let testText = document.getElementById("reverse_text").value;

  document.getElementById("result_alert").style.display = "none";

  if (testText.length > 0) {
    const result = testText.split("").reverse().join("");
    document.getElementById("result").innerHTML = result;
    document.getElementById("result_alert").style.display = "inline-block";
  }
}