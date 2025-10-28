// yilni chiqarish
document.getElementById("year").textContent = new Date().getFullYear();

// dark mode
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    darkModeBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// dark holatini saqlash
window.addEventListener("load", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️";
  }
});

// SCROLL EFFECTS
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
