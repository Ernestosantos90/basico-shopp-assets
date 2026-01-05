/* ==================================================
   SLIDER – AUTOPLAY CONTÍNUO (SEM ESPAÇO EM BRANCO)
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");

  if (track) {
    track.innerHTML += track.innerHTML;

    let position = 0;
    let isPaused = false;

    const isMobile = window.innerWidth <= 768;
    const speed = isMobile ? 0.15 : 0.3;
    const totalWidth = track.scrollWidth / 2;

    function animate() {
      if (!isPaused) {
        position -= speed;
        if (-position >= totalWidth) position = 0;
        track.style.transform = `translateX(${position}px)`;
      }
      requestAnimationFrame(animate);
    }

    track.addEventListener("mouseenter", () => isPaused = true);
    track.addEventListener("mouseleave", () => isPaused = false);

    const step = 240;
    nextBtn?.addEventListener("click", () => {
      position -= step;
      track.style.transform = `translateX(${position}px)`;
    });

    prevBtn?.addEventListener("click", () => {
      position += step;
      if (position > 0) position = -totalWidth;
      track.style.transform = `translateX(${position}px)`;
    });

    animate();
  }
});

/* ==================================================
   CARRINHO GLOBAL
================================================== */

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function atualizarCarrinhoUI() {
  const contador = document.getElementById("contador-carrinho");
  if (!contador) return;

  const total = carrinho.reduce((s, i) => s + i.quantidade, 0);
  contador.textContent = total;
}

function adicionarAoCarrinho(produto) {
  const existente = carrinho.find(p => p.id === produto.id);

  if (existente) {
    existente.quantidade++;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarCarrinhoUI();
}

document.addEventListener("DOMContentLoaded", atualizarCarrinhoUI);

/* ==================================================
   EVENTO BOTÃO "ADICIONAR AO CARRINHO"
================================================== */

document.addEventListener("click", e => {
  const btn = e.target.closest(".btn-add-carrinho");
  if (!btn) return;

  const card = btn.closest(".card");
  if (!card) return;

  const produto = {
    id: card.dataset.id,
    nome: card.dataset.nome,
    preco: Number(card.dataset.preco),
    imagem: card.querySelector("img")?.src || ""
  };

  adicionarAoCarrinho(produto);

  btn.textContent = "Adicionado ✓";
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = "Adicionar ao carrinho";
    btn.disabled = false;
  }, 1200);
});

/* ==================================================
   MINI-CARRINHO
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const carrinhoBtn = document.querySelector(".carrinho");
  const mini = document.getElementById("mini-carrinho");
  const lista = document.querySelector(".mini-carrinho-lista");
  const totalEl = document.getElementById("mini-total");

  if (!carrinhoBtn || !mini) return;

  carrinhoBtn.addEventListener("click", e => {
    e.preventDefault();
    mini.classList.toggle("ativo");
    renderMini();
  });

  function renderMini() {
    if (!lista) return;

    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach(item => {
      total += item.preco * item.quantidade;

      const li = document.createElement("li");
      li.className = "mini-carrinho-item";

      li.innerHTML = `
        <img src="${item.imagem}">
        <div>
          <strong>${item.nome}</strong><br>
          ${item.quantidade} × Kz ${item.preco.toLocaleString()}
        </div>
      `;

      lista.appendChild(li);
    });

    if (totalEl) {
      totalEl.textContent = `Kz ${total.toLocaleString()}`;
    }
  }
});

/* ==================================================
   INTERAÇÃO DO BOTÃO LOGIN
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login-btn");

  if (!loginBtn) return;

  loginBtn.addEventListener("click", () => {
    console.log("Usuário clicou em Login");
  });
});
