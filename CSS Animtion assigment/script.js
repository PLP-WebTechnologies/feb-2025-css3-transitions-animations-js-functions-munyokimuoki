// Set saved theme on load
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.className = savedTheme;
    document.getElementById("theme").value = savedTheme;
  });
  
  // Store theme selection in localStorage
  document.getElementById("theme").addEventListener("change", (e) => {
    const selectedTheme = e.target.value;
    document.body.className = selectedTheme;
    localStorage.setItem("theme", selectedTheme);
  });
  
  // Animate button on click
  document.getElementById("animateBtn").addEventListener("click", () => {
    const btn = document.getElementById("animateBtn");
    btn.classList.add("animate");
  
    // Remove class after animation to allow repeat triggers
    btn.addEventListener("animationend", () => {
      btn.classList.remove("animate");
    }, { once: true });
  });
  