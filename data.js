document.addEventListener("DOMContentLoaded", async () => {
  const email = localStorage.getItem("client_email");
  const code = localStorage.getItem("client_code");

  if (!email || !code) {
    alert("الرجاء تسجيل الدخول أولاً.");
    window.location.href = "login.html";
    return;
  }

  try {
    const response = await fetch(`https://script.google.com/macros/s/AKfycbwrrXbXuI_TQIyGwbCSbbcZUr5vBxx6aAfMEdCJYd7sJNowU0LZtaxRm6LnPkGhc0uobg/exec?email=${encodeURIComponent(email)}&code=${encodeURIComponent(code)}`);
    const data = await response.json();

    let content = "";
    if (location.pathname.includes("progress")) content = data.ProjectProgress;
    else if (location.pathname.includes("expenses")) content = data.Expenses;
    else if (location.pathname.includes("reports")) content = data.Reports;
    else if (location.pathname.includes("tips")) content = data.DailyTip;
    else if (location.pathname.includes("files")) content = `<a href='${data.Files}' target='_blank'>عرض الملفات</a>`;

    document.getElementById("content").innerHTML = content;
  } catch (e) {
    document.getElementById("content").innerHTML = "حدث خطأ أثناء جلب البيانات.";
  }
});