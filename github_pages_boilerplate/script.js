const revealNodes = document.querySelectorAll(".reveal");

revealNodes.forEach((el) => {
  const delay = Number(el.dataset.delay || 0);
  el.style.setProperty("--delay", `${delay}ms`);
});

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
