document.addEventListener("DOMContentLoaded", async () => {
  const email = localStorage.getItem("client_email");
  const code = localStorage.getItem("client_code");

  if (!email || !code) {
    alert("الرجاء تسجيل الدخول أولاً.");
    window.location.href = "index.html";
    return;
  }

  try {
    const response = await fetch(`https://script.google.com/macros/s/AKfycbwrrXbXuI_TQIyGwbCSbbcZUr5vBxx6aAfMEdCJYd7sJNowU0LZtaxRm6LnPkGhc0uobg/exec?email=${email}&code=${code}`);
    const data = await response.json();
    document.getElementById("files").innerHTML = data["Files"] || "لا توجد بيانات متاحة.";
  } catch (e) {
    document.getElementById("files").textContent = "حدث خطأ أثناء تحميل البيانات.";
  }
});