const accordion = document.querySelector(".accordion");
const toggles = [...accordion.querySelectorAll(".faq-toggle")];

toggles.forEach((toggle) => {
  toggle.addEventListener("change", (event) => {
    const parent = event.target.closest(".faq");
    const checked = event.target.checked;

    if (checked) parent.classList.add("open");
    else parent.classList.remove("open");
  });
});
