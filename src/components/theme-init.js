/* eslint-disable @typescript-eslint/no-unused-vars */
var THEME_KEY = "theme";
window.__setTheme = function (next) {
  document.documentElement.classList.toggle("dark", next === "dark");
  document.documentElement.style.colorScheme = next;
  try {
    window.localStorage.setItem(THEME_KEY, next);
  } catch (_) {}
  window.dispatchEvent(new CustomEvent("pc-theme-change"));
};
window.__getTheme = function () {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};
(function () {
  var stored = null;
  try {
    stored = window.localStorage.getItem(THEME_KEY);
  } catch (_) {}
  var initial =
    stored ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  window.__setTheme(initial);
})();
/* eslint-enable @typescript-eslint/no-unused-vars */