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

    document.getElementById("progress").style.width = data.ProjectProgress + "%";
    document.getElementById("progress").textContent = data.ProjectProgress + "%";
    document.getElementById("stage").textContent = data.CurrentStage || "لم يتم التحديد";

    if (data.Image1) document.getElementById("img1").src = data.Image1;
    if (data.Image2) document.getElementById("img2").src = data.Image2;
  } catch (e) {
    alert("خطأ في تحميل بيانات المشروع.");
  }
});