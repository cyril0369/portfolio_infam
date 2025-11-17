export function toggleTheme() {
  const html = document.documentElement;
  const body = document.body;

  if (html.getAttribute("data-theme") === "dark") {
    html.removeAttribute("data-theme");
    body.classList.add("flash-theme");
    body.classList.remove("flash-theme");
  } else {
    html.setAttribute("data-theme", "dark");
    body.classList.add("flash-theme");
    body.classList.remove("flash-theme");
  }
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
