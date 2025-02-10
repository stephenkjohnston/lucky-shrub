import './scss/main.scss'

document.addEventListener("DOMContentLoaded", () => {
  const copyrightYear = document.getElementById("year");

  if (copyrightYear) {
    copyrightYear.innerText = new Date().getFullYear();
  }
});
