document.addEventListener("DOMContentLoaded", async () => {
  const email = localStorage.getItem("client_email");
  const code = localStorage.getItem("client_code");

  if (!email || !code) {
    alert("الرجاء تسجيل الدخول أولاً.");
    window.location.href = "login.html";
    return;
  }

  try {
    const response = await fetch(`https://script.google.com/macros/s/AKfycbwrrXbXuI_TQIyGwbCSbbcZUr5vBxx6aAfMEdCJYd7sJNowU0LZtaxRm6LnPkGhc0uobg/exec?email=${email}&code=${code}`);
    const data = await response.json();
    document.getElementById("reports").textContent = data["Reports"] || "لا توجد بيانات.";
  } catch (e) {
    alert("حدث خطأ أثناء تحميل البيانات.");
  }
});