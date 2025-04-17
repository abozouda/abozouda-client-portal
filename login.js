async function loginClient() {
  const email = document.getElementById("email").value.trim();
  const code = document.getElementById("clientCode").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  if (!email || !code) {
    errorMessage.textContent = "يرجى إدخال البريد الإلكتروني والكود.";
    return;
  }

  try {
    const response = await fetch(`https://script.google.com/macros/s/AKfycbwrrXbXuI_TQIyGwbCSbbcZUr5vBxx6aAfMEdCJYd7sJNowU0LZtaxRm6LnPkGhc0uobg/exec?email=${encodeURIComponent(email)}&code=${encodeURIComponent(code)}`);
    const data = await response.text();

    if (data.includes("Unauthorized")) {
      errorMessage.textContent = "❌ البيانات غير صحيحة، يرجى التأكد من البريد الإلكتروني أو الكود.";
    } else {
      localStorage.setItem("client_email", email);
      localStorage.setItem("client_code", code);
      window.location.href = "dashboard.html";
    }
  } catch (e) {
    errorMessage.textContent = "حدث خطأ أثناء محاولة تسجيل الدخول.";
  }
}