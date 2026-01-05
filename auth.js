/* ==================================================
   REGISTRO + VALIDAÇÃO FRONTEND
================================================== */

const registerForm = document.getElementById("register-form");

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nascimento = new Date(
      document.getElementById("nascimento").value
    );

    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();

    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    const feedback = document.getElementById("register-feedback");

    if (idade < 18) {
      feedback.textContent = "Cadastro permitido apenas para maiores de 18 anos.";
      feedback.style.color = "red";
      return;
    }

    feedback.textContent = "Cadastro válido! Continue para o login.";
    feedback.style.color = "green";

    // Fluxo natural
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  });
}
