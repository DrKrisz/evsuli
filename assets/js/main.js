const menuBtn = document.querySelector('#menuBtn');
    const navLinks = document.querySelector('#navLinks');

    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuBtn.textContent = navLinks.classList.contains('open') ? '×' : '☰';
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.textContent = '☰';
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
// Auth helpers
document.querySelectorAll("[data-password-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.parentElement.querySelector("input");
    if (!input) return;

    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    button.textContent = isPassword ? "Elrejt" : "Mutat";
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

    alertBox.textContent = "A kinézet és az alap ellenőrzés működik. Backend még nincs bekötve.";
    alertBox.classList.add("show");
  });
});
