
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("[data-menu-toggle]");

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      document.body.classList.toggle("menu-open");
      const isOpen = document.body.classList.contains("menu-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "Bezárás" : "Menü";
    });
  }

  document.querySelectorAll("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = button.parentElement.querySelector("input");
      if (!input) return;

      const hidden = input.type === "password";
      input.type = hidden ? "text" : "password";
      button.textContent = hidden ? "Elrejt" : "Mutat";
      input.focus();
    });
  });

  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const alertBox = form.querySelector(".alert");
      if (!alertBox) return;

      const password = form.querySelector("input[name='password']");
      const confirm = form.querySelector("input[name='password_confirm']");

      if (password && confirm && password.value !== confirm.value) {
        alertBox.textContent = "A két jelszó nem egyezik. Nézd meg újra.";
        alertBox.classList.add("show");
        return;
      }

      alertBox.textContent = "A dizájn működik. Backend még nincs bekötve, ezért most nem küld adatot sehová.";
      alertBox.classList.add("show");
    });
  });
});
