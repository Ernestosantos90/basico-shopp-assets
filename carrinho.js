/* ==================================================
   CARRINHO.JS — RENDERIZAÇÃO
================================================== */

// Recupera carrinho do localStorage
const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Elementos
const lista = document.getElementById("carrinho-lista");
const totalEl = document.getElementById("carrinho-total");

// Renderiza carrinho
function renderCarrinho() {
  lista.innerHTML = "";

  if (carrinho.length === 0) {
    lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
    totalEl.textContent = "Kz 0";
    return;
  }

  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco * item.quantidade;

    const article = document.createElement("article");
    article.classList.add("carrinho-item");

    article.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">

      <div class="carrinho-item-info">
        <h3>${item.nome}</h3>
        <span>Kz ${item.preco}</span>
      </div>

      <div class="carrinho-quantidade">
        <button onclick="alterarQtd(${index}, -1)">−</button>
        <span>${item.quantidade}</span>
        <button onclick="alterarQtd(${index}, 1)">+</button>
      </div>

      <div class="carrinho-preco">
        Kz ${item.preco * item.quantidade}
      </div>
    `;

    lista.appendChild(article);
  });

  totalEl.textContent = `Kz ${total}`;
}

// Alterar quantidade
function alterarQtd(index, delta) {
  carrinho[index].quantidade += delta;

  if (carrinho[index].quantidade <= 0) {
    carrinho.splice(index, 1);
  }

  salvarCarrinho();
  renderCarrinho();
}

// Salva no localStorage
function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// Inicializa
renderCarrinho();
