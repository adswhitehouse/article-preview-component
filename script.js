// Variables
let share = document.querySelector(".jsShare");
let socialLinks = document.querySelector(".jsSocialLinks");
let closeShare = document.querySelector(".jsCloseShare");

// Toggles social box
share.addEventListener("click", () => {
  socialLinks.classList.toggle("social-visibility");
});

// Hides social box when clicked away from
window.addEventListener("click", (e) => {
  if (!share.contains(e.target) && !socialLinks.contains(e.target)) {
    socialLinks.classList.remove("social-visibility");
  }
});

// Hides social box when clicked (only visible on smaller screens)
closeShare.addEventListener("click", () => {
  socialLinks.classList.remove("social-visibility");
});
