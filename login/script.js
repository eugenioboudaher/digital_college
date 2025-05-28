function fazerLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  const emailCorreto = "teste";
  const senhaCorreta = "123";

  if (email === emailCorreto && senha === senhaCorreta) {
    window.location.href = "geral.html";
  } else {
    mensagem.textContent = "E-mail ou senha incorretos!";
  }
}
