var arr = JSON.parse(localStorage.getItem("signup")) || [];
function login(event) {
  event.preventDefault();
  var email = document.getElementById("mail").value;
  var password = document.getElementById("password").value;

  var flag = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].email === email && arr[i].password === password) {
      flag = true;
      break;
    }
  }
  if (flag) {
    alert("Login Successfull");
    window.location.assign("/Home/after-login.html")
  } else {
    alert("Enter Correct Username and Password");
  }
  // window.location.href = "../Home/after-login.html";
}