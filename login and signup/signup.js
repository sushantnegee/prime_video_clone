var arr = [];
function signup(event) {
  event.preventDefault();
  var data = {
    name: document.getElementById("name").value,
    email: document.getElementById("mail").value,
    password: document.getElementById("password").value,
    password: document.getElementById("repassword").value,
  };
  arr.push(data);
  //console.log(arr);
  localStorage.setItem("signup", JSON.stringify(arr));
  window.location.href = "./login.html";
}
