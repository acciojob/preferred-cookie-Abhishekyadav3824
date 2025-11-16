//your JS code here. If required.
// Helper: get cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

// Apply saved preferences on load
window.onload = function () {
  const savedSize = getCookie("fontsize");
  const savedColor = getCookie("fontcolor");

  if (savedSize) {
    document.documentElement.style.setProperty("--fontsize", savedSize + "px");
    document.getElementById("fontsize").value = savedSize;
  }

  if (savedColor) {
    document.documentElement.style.setProperty("--fontcolor", savedColor);
    document.getElementById("fontcolor").value = savedColor;
  }
};

// Save preferences to cookies
document.getElementById("settingsForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const size = document.getElementById("fontsize").value;
  const color = document.getElementById("fontcolor").value;

  if (size < 8 || size > 72) {
    alert("Font size must be between 8 and 72.");
    return;
  }

  // Store cookies for 1 year
  document.cookie = `fontsize=${size}; path=/; max-age=31536000`;
  document.cookie = `fontcolor=${color}; path=/; max-age=31536000`;

  // Apply instantly
  document.documentElement.style.setProperty("--fontsize", size + "px");
  document.documentElement.style.setProperty("--fontcolor", color);

  alert("Preferences saved!");
});
