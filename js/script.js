// Login Page code Start
document.querySelector(".loginBtn").addEventListener("click", function (event) {
  event.preventDefault();
  const inputEmail = document.querySelector(".inputEmail").value;
  const inputPassword = document.querySelector(".inputPassword").value;
  // console.log(inputEmail, inputPassword);

  if (inputEmail === "twahid746@gmail.com" && inputPassword === "27642") {
    console.log("Login Successfull");
    window.location.href = "home.html";
  } else {
    alert("You did someThing Wrong");
  }
});
// Login Page code End


