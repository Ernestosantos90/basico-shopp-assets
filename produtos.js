/* ==================================================
   CATÁLOGO DE PRODUTOS
   --------------------------------------------------
   ✔ Usa produtos-data.js como base
   ✔ Preenche o grid de produtos
   ✔ Implementa filtro por categoria
   ✔ Compatível com produtos.html (HTML que você mandou)
================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // ELEMENTOS DO DOM
  // ===============================

  const grid = document.querySelector(".produtos-grid");
  const filtroCategoria = document.getElementById("filtro-categoria");

  // Segurança básica
  if (!grid || !filtroCategoria) {
    console.error("Grid ou filtro não encontrado no HTML");
    return;
  }

  // ===============================
  // DADOS
  // ===============================

  // Todos os produtos vêm da base única
  const produtos = getProdutos();

  // ===============================
  // FUNÇÃO DE RENDERIZAÇÃO
  // ===============================

  function renderizarProdutos(lista) {
    // Limpa o grid antes de renderizar
    grid.innerHTML = "";

    // Caso não haja produtos (filtro vazio)
    if (lista.length === 0) {
      grid.innerHTML = "<p>Nenhum produto encontrado.</p>";
      return;
    }

    // Cria os cards
    lista.forEach(produto => {
      const card = document.createElement("article");
      card.className = "card";

      card.innerHTML = `
        <a href="produto.html?id=${produto.id}" class="card-link">
          <div class="card__imagem">
            <img 
              src="${produto.imagem}" 
              alt="${produto.nome}"
              loading="lazy"
            >
          </div>
        </a>

        <div class="card__info">
          <h3 class="titulo-card">${produto.nome}</h3>

          <span class="card__precoatual">
            Kz ${produto.preco.toLocaleString()}
          </span>

          <button class="btn-add-carrinho">
            Adicionar ao carrinho
          </button>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  // ===============================
  // PREENCHER FILTRO DE CATEGORIAS
  // ===============================

  /*
    As categorias são geradas dinamicamente
    a partir dos produtos cadastrados.
    Isso evita erro manual e duplicação.
  */

  const categorias = getCategorias();

  categorias.forEach(categoria => {
    const option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;
    filtroCategoria.appendChild(option);
  });

  // ===============================
  // EVENTO DE FILTRO
  // ===============================

  filtroCategoria.addEventListener("change", () => {
    const valor = filtroCategoria.value;

    if (valor === "todos") {
      renderizarProdutos(produtos);
    } else {
      const filtrados = produtos.filter(
        produto => produto.categoria === valor
      );
      renderizarProdutos(filtrados);
    }
  });

  // ===============================
  // RENDERIZAÇÃO INICIAL
  // ===============================

  renderizarProdutos(produtos);

});
