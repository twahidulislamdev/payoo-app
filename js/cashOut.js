let cashOutInputField = document.getElementById("cashOutInputField");
let cashOutPassword = document.getElementById("cashOutPassword");
let availableBalance = document.getElementById("availableBalance");
document.getElementById("cashOutBtn").addEventListener("click", (event) => {
  event.preventDefault();
  let cashOutPasswordValue = cashOutPassword.value;
  if (cashOutPasswordValue == "27842") {
    let cashOutInputFieldValue = parseFloat(cashOutInputField.value);
    let availableBalanceValue = parseFloat(availableBalance.innerHTML);
    let newCashOutAmount = availableBalanceValue - cashOutInputFieldValue;

    if (availableBalanceValue >= cashOutInputFieldValue) {
      availableBalance.innerHTML = newCashOutAmount;
      cashOutInputField.value = "";
    } else {
      alert("Insufficient Balance");
    }
  } else {
    alert("Please Enter Your Password");
  }
});

// Log out Code Start
document.getElementById("logOutBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});
// Log out Code Start
