const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

checkBtn.addEventListener("click", () => {
  const userInput = textInput.value;

  if (userInput.trim() === "") {
    alert("Please input a value.");
    return;
  }

  if (isPalindrome(userInput)) {
    result.textContent = `${userInput} is a palindrome.`;
  } else {
    result.textContent = `${userInput} is not a palindrome.`;
  }
});