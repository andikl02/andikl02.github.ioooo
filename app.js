const nomeElemento = document.getElementById("nome");
const descricaoElemento = document.querySelector(".descricao");
const botaoMostrarBio = document.getElementById("mostrar-bio");

nomeElemento.addEventListener("click", () => {
  descricaoElemento.classList.toggle("mostrar");
});

function rolagemSuave(event) {
  event.preventDefault();
  const destino = event.target.getAttribute("href");
  document.querySelector(destino).scrollIntoView({
    behavior: "smooth"
  });
}

const linksAncora = document.querySelectorAll('a[href^="#"]');
linksAncora.forEach(link => {
  link.addEventListener("click", rolagemSuave);
});

window.addEventListener("load", () => {
  descricaoElemento.classList.add("animar");
});

botaoMostrarBio.addEventListener("click", () => {
  descricaoElemento.classList.toggle("expandir");
  botaoMostrarBio.textContent = descricaoElemento.classList.contains("expandir") ? "Esconder Biografia" : "Mostrar Biografia";

  // Redirecionar para a página otrapg.html quando o botão "bio" for clicado
  window.location.href = "otrapg.html";
});
