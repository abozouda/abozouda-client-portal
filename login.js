function loginClient() {
  const email = document.getElementById("email").value;
  const code = document.getElementById("clientCode").value;
  if (email && code) {
    localStorage.setItem("client_email", email);
    localStorage.setItem("client_code", code);
    window.location.href = "progress.html";
  } else {
    alert("يرجى إدخال البريد الإلكتروني والكود.");
  }
}