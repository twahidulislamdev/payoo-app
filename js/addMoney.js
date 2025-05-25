let addMoneyInputField = document.getElementById("addMoneyInputField");
let addMoneyPassword = document.getElementById("addMoneyPassword");
let availableBalance = document.getElementById("availableBalance");
document.getElementById("addMoneyBtn").addEventListener("click", (event) => {
  event.preventDefault();
  let addMoneyPasswordValue = addMoneyPassword.value;
  if (addMoneyPasswordValue == "27642") {
    let addMoneyInputFieldValue = parseFloat(addMoneyInputField.value);
    let availableBalanceValue = parseFloat(availableBalance.innerHTML);
    let newAddedAmount = addMoneyInputFieldValue + availableBalanceValue;
    availableBalance.innerHTML = newAddedAmount;
    addMoneyInputField.value = "";
    // console.log(addMoneyInputFieldValue);
  } else {
    alert("Please Enter Your Password");
  }
});

// Log out Code Start 
document.getElementById('logOutBtn').addEventListener('click', ()=>{
  window.location.href = "index.html"
})
// Log out Code Start