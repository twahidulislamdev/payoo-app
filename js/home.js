// Home Page code Start
document.querySelector(".addMoney").addEventListener("click", () => {
  window.location.href = "addMoney.html";
  console.log("clicked");
});
document.querySelector(".cashOut").addEventListener("click", () => {
  window.location.href = "cashOut.html";
});
// Home Page code End

// Log out Code Start 
document.querySelector('.homeLogOutBtn').addEventListener('click', ()=>{
  window.location.href = "index.html"
})
// Log out Code Start
