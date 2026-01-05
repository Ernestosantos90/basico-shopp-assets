document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // PRODUTO — PÁGINA DE DETALHE
  // ===============================

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const produto = getProdutoPorId(id);

  if (!produto) {
    alert("Produto não encontrado");
    return;
  }

  // ===============================
  // PREENCHER CONTEÚDO
  // ===============================

  document.getElementById("produto-nome").textContent = produto.nome;
  document.getElementById("produto-preco").textContent =
    `Kz ${produto.preco.toLocaleString()}`;
  document.getElementById("produto-descricao").textContent =
    produto.descricao;

  // Imagem principal
  const imagemPrincipal = document.getElementById("produto-imagem");
  imagemPrincipal.src = produto.imagem;
  imagemPrincipal.alt = produto.nome;

  // ===============================
  // MINIATURAS (REPETIÇÃO CONTROLADA)
  // ===============================

  const miniaturas = document.querySelector(".miniaturas");
  miniaturas.innerHTML = "";

  /*
    🔁 REPETIÇÃO INTENCIONAL DA IMAGEM
    --------------------------------
    No futuro:
    produto.imagens = [img1, img2, img3]

    Por enquanto:
    repetimos a imagem principal
  */

  for (let i = 1; i <= 3; i++) {
    const thumb = document.createElement("img");
    thumb.src = produto.imagem;
    thumb.alt = `Miniatura ${i} - ${produto.nome}`;

    thumb.addEventListener("click", () => {
      imagemPrincipal.src = produto.imagem;
    });

    miniaturas.appendChild(thumb);
  }

  // ===============================
  // BOTÃO ADICIONAR AO CARRINHO
  // ===============================

  const btn = document.getElementById("btn-produto-carrinho");

  btn.addEventListener("click", () => {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const existente = carrinho.find(item => item.id === produto.id);

    if (existente) {
      existente.quantidade++;
    } else {
      carrinho.push({
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        imagem: produto.imagem,
        quantidade: 1
      });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    btn.textContent = "Adicionado ✓";
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = "Adicionar ao carrinho";
      btn.disabled = false;
    }, 1200);
  });

});

document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const produto = getProdutoPorId(id);
  if (!produto) return;

  /* Preenchimento básico */
  document.getElementById("produto-nome").textContent = produto.nome;
  document.getElementById("produto-preco").textContent =
    `Kz ${produto.preco.toLocaleString()}`;
  document.getElementById("produto-descricao").textContent =
    produto.descricao;

  /* SEO dinâmico */
  document.title = `${produto.nome} | Basico Shopp`;
  document.getElementById("meta-descricao")
    .setAttribute("content", produto.descricao);

  /* Galeria */
  const imagemPrincipal = document.getElementById("produto-imagem");
  imagemPrincipal.src = produto.imagem;

  const miniaturas = document.querySelector(".miniaturas");
  miniaturas.innerHTML = "";

  produto.imagens.forEach(img => {
    const thumb = document.createElement("img");
    thumb.src = img;

    thumb.addEventListener("click", () => {
      imagemPrincipal.src = img;
    });

    miniaturas.appendChild(thumb);
  });

});

