const root = document.documentElement;
const modeButton = document.querySelector(".mode-toggle");
const tocLinks = Array.from(document.querySelectorAll(".toc a"));
const sections = tocLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const storedMode = localStorage.getItem("luke-gio-wiki-mode");
if (storedMode === "dark") {
  root.classList.add("dark");
  modeButton.textContent = "낮모드";
}

modeButton.addEventListener("click", () => {
  root.classList.toggle("dark");
  const isDark = root.classList.contains("dark");
  localStorage.setItem("luke-gio-wiki-mode", isDark ? "dark" : "light");
  modeButton.textContent = isDark ? "낮모드" : "밤모드";
});

const setActive = () => {
  let activeId = sections[0]?.id;
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120) activeId = section.id;
  }

  tocLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
  });
};

setActive();
window.addEventListener("scroll", setActive, { passive: true });
