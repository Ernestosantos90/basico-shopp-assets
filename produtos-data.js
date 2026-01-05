/* ==================================================
   BASE COMPLETA DE PRODUTOS — BASICO SHOPP
   --------------------------------------------------
   ✔ TODOS os produtos reais (38+)
   ✔ Cada imagem = produto distinto
   ✔ Catálogo, filtros e páginas individuais
================================================== */

/* ===== FUNÇÃO GERADORA PARA PRODUTOS NUMERADOS ===== */
function gerarProdutosVariacao({
  nomeBase,
  slug,
  categoria,
  preco,
  descricao,
  imagens
}) {
  return imagens.map((img, index) => ({
    id: `${slug}-${index + 1}`,
    nome: `${nomeBase} – Modelo ${index + 1}`,
    categoria,
    preco,
    descricao,
    imagem: img,
    imagens: [img],
    destaque: false
  }));
}

/* ================= PRODUTOS ================= */
const PRODUTOS = [

  /* ========= AIRPODS ========= */
  ...gerarProdutosVariacao({
    nomeBase: "AirPods",
    slug: "airpods",
    categoria: "Eletrônicos",
    preco: 95000,
    descricao: "Fones de ouvido sem fio com alta qualidade sonora.",
    imagens: [
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/airpods.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/airpods%20(2).jpg"
    ]
  }),

  /* ========= DJI OSMO ========= */
  ...gerarProdutosVariacao({
    nomeBase: "DJI Osmo Pocket",
    slug: "dji-osmo-pocket",
    categoria: "Eletrônicos",
    preco: 285000,
    descricao: "Câmera portátil com estabilização profissional.",
    imagens: [
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/dji-osmo-poket-combo-creator.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/dji-osmo-poket-2.jpg.jpg"
    ]
  }),

  /* ========= CÂMERAS DE VIGILÂNCIA ========= */
  ...gerarProdutosVariacao({
    nomeBase: "Câmera de Vigilância",
    slug: "camera-vigilancia",
    categoria: "Segurança",
    preco: 48000,
    descricao: "Sistema de segurança com monitoramento remoto.",
    imagens: [
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/camera-de-vigilancia.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/camera-de-vigilancia%20(2).jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/camera-de-vigilancia%20(3).jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/camera-de-vigilancia%20(4).jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/camera-de-vigilancia%20(5).jpg"
    ]
  }),

  /* ========= GABINETES ========= */
  ...gerarProdutosVariacao({
    nomeBase: "Gabinete Gamer",
    slug: "gabinete-gamer",
    categoria: "Informática",
    preco: 125000,
    descricao: "Gabinete moderno com excelente ventilação.",
    imagens: [
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/gabinete-computador-1.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/gabinete-computador-2.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/gabinete-computador-3.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/gabinete-computador-4.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/gabinete-computador-5.jpg.jpg"
    ]
  }),

  /* ========= ÓCULOS ========= */
  ...gerarProdutosVariacao({
    nomeBase: "Óculos de Luxo",
    slug: "oculos-luxo",
    categoria: "Moda",
    preco: 32000,
    descricao: "Óculos de luxo com design moderno.",
    imagens: [
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/oculos-de-luxo.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/oculos-de-luxo%20(2).jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/oculos-de-luxo%20(3).jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/oculos-de-luxo%20(4).jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/oculos-de-luxo%20(5).jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/oculos-de-luxo%20(6).jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/oculos-de-luxo%20(7).jpg"
    ]
  }),

  /* ========= TERNOS ========= */
  ...gerarProdutosVariacao({
    nomeBase: "Terno de Casamento Masculino",
    slug: "terno-casamento",
    categoria: "Moda",
    preco: 85000,
    descricao: "Terno elegante para ocasiões especiais.",
    imagens: [
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-1.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-2.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-3.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-4.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-5.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-6.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-7.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-8.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-9.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-10.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-11.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-12.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-13.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-14.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-15.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/terno-casamento-16.jpg.jpg"
    ]
  }),

/* ========= PRODUTOS ÚNICOS (SEM VARIAÇÃO) ========= */

  {
    id: "mvme-card",
    nome: "Cartão MVME",
    categoria: "Outros",
    preco: 15000,
    descricao: "Cartão MVME para uso diário.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/MVME-card.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/MVME-card.jpg"],
    destaque: false
  },

  {
    id: "controle-gamer",
    nome: "Controle Gamer",
    categoria: "Eletrônicos",
    preco: 35000,
    descricao: "Controle compatível com diversos dispositivos.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/controle.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/controle.jpg"],
    destaque: false
  },

  {
    id: "memoria-ram-ddr4",
    nome: "Memória RAM DDR4",
    categoria: "Informática",
    preco: 42000,
    descricao: "Memória RAM DDR4 de alta performance.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/memoria-ram-ddr4.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/memoria-ram-ddr4.jpg"],
    destaque: false
  },

  {
    id: "mouse-pad",
    nome: "Mouse Pad",
    categoria: "Informática",
    preco: 7500,
    descricao: "Mouse pad confortável para uso diário.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/mouse-pad.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/mouse-pad.jpg"],
    destaque: false
  },

  {
    id: "placa-wifi",
    nome: "Placa Wi-Fi",
    categoria: "Informática",
    preco: 18000,
    descricao: "Placa Wi-Fi para computadores.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/palaca-wifi-1.jpg.jpg",
    imagens: [
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/palaca-wifi-1.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/palaca-wifi-2.jpg.jpg",
      "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/palaca-wifi-3.jpg.jpg"
    ],
    destaque: false
  },

  {
    id: "placa-mae-machinist",
    nome: "Placa-mãe Machinist",
    categoria: "Informática",
    preco: 165000,
    descricao: "Placa-mãe Machinist para setups avançados.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/placa-mae-machinist-E5MR9A-PRO-MAX-SET.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/placa-mae-machinist-E5MR9A-PRO-MAX-SET.jpg"],
    destaque: false
  }

];

/* ================= FUNÇÕES ================= */

function getProdutos() {
  return PRODUTOS;
}

function getProdutoPorId(id) {
  return PRODUTOS.find(p => p.id === id);
}

function getCategorias() {
  return [...new Set(PRODUTOS.map(p => p.categoria))];
}

/* ================= PRODUTOS ADICIONAIS (UNITÁRIOS) ================= */

const PRODUTOS_UNITARIOS = [

  {
    id: "mvme-card",
    nome: "Cartão MVME",
    categoria: "Outros",
    preco: 15000,
    descricao: "Cartão MVME para uso diário.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/MVME-card.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/MVME-card.jpg"],
    destaque: false
  },

  {
    id: "airpods-modelo-1",
    nome: "AirPods – Modelo 1",
    categoria: "Eletrônicos",
    preco: 95000,
    descricao: "Fones sem fio com alta qualidade sonora.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/airpods.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/airpods.jpg"],
    destaque: false
  },

  {
    id: "airpods-modelo-2",
    nome: "AirPods – Modelo 2",
    categoria: "Eletrônicos",
    preco: 95000,
    descricao: "Fones sem fio com alta qualidade sonora.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/airpods%20(2).jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/airpods%20(2).jpg"],
    destaque: false
  },

  {
    id: "camera-vigilancia-1",
    nome: "Câmera de Vigilância – Modelo 1",
    categoria: "Segurança",
    preco: 48000,
    descricao: "Sistema de vigilância com monitoramento remoto.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/camera-de-vigilancia.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/camera-de-vigilancia.jpg"],
    destaque: false
  },

  {
    id: "camera-vigilancia-2",
    nome: "Câmera de Vigilância – Modelo 2",
    categoria: "Segurança",
    preco: 48000,
    descricao: "Sistema de vigilância com monitoramento remoto.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/camera-de-vigilancia%20(2).jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/camera-de-vigilancia%20(2).jpg"],
    destaque: false
  },

  {
    id: "camera-vigilancia-3",
    nome: "Câmera de Vigilância – Modelo 3",
    categoria: "Segurança",
    preco: 48000,
    descricao: "Sistema de vigilância com monitoramento remoto.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/camera-de-vigilancia%20(3).jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/camera-de-vigilancia%20(3).jpg"],
    destaque: false
  },

  {
    id: "camera-vigilancia-4",
    nome: "Câmera de Vigilância – Modelo 4",
    categoria: "Segurança",
    preco: 48000,
    descricao: "Sistema de vigilância com monitoramento remoto.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/camera-de-vigilancia%20(4).jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/camera-de-vigilancia%20(4).jpg"],
    destaque: false
  },

  {
    id: "camera-vigilancia-5",
    nome: "Câmera de Vigilância – Modelo 5",
    categoria: "Segurança",
    preco: 48000,
    descricao: "Sistema de vigilância com monitoramento remoto.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/camera-de-vigilancia%20(5).jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/camera-de-vigilancia%20(5).jpg"],
    destaque: false
  },

  {
    id: "controle-gamer",
    nome: "Controle Gamer",
    categoria: "Eletrônicos",
    preco: 35000,
    descricao: "Controle compatível com diversos dispositivos.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/controle.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/controle.jpg"],
    destaque: false
  },

  {
    id: "dji-osmo-pocket-1",
    nome: "DJI Osmo Pocket – Creator Combo",
    categoria: "Eletrônicos",
    preco: 285000,
    descricao: "Câmera portátil com estabilização profissional.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/dji-osmo-poket-combo-creator.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/dji-osmo-poket-combo-creator.jpg"],
    destaque: true
  },

  {
    id: "dji-osmo-pocket-2",
    nome: "DJI Osmo Pocket – Modelo 2",
    categoria: "Eletrônicos",
    preco: 275000,
    descricao: "Câmera portátil com estabilização profissional.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/dji-osmo-poket-2.jpg.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/dji-osmo-poket-2.jpg.jpg"],
    destaque: false
  },

  {
    id: "memoria-ram-ddr4",
    nome: "Memória RAM DDR4",
    categoria: "Informática",
    preco: 42000,
    descricao: "Memória RAM DDR4 de alta performance.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/memoria-ram-ddr4.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/memoria-ram-ddr4.jpg"],
    destaque: false
  },

  {
    id: "mouse-pad",
    nome: "Mouse Pad",
    categoria: "Informática",
    preco: 7500,
    descricao: "Mouse pad confortável para uso diário.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/mouse-pad.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/mouse-pad.jpg"],
    destaque: false
  },

  {
    id: "placa-wifi-1",
    nome: "Placa Wi-Fi – Modelo 1",
    categoria: "Informática",
    preco: 18000,
    descricao: "Placa Wi-Fi para computadores.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/palaca-wifi-1.jpg.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/palaca-wifi-1.jpg.jpg"],
    destaque: false
  },

  {
    id: "placa-wifi-2",
    nome: "Placa Wi-Fi – Modelo 2",
    categoria: "Informática",
    preco: 18000,
    descricao: "Placa Wi-Fi para computadores.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/palaca-wifi-2.jpg.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/palaca-wifi-2.jpg.jpg"],
    destaque: false
  },

  {
    id: "placa-wifi-3",
    nome: "Placa Wi-Fi – Modelo 3",
    categoria: "Informática",
    preco: 18000,
    descricao: "Placa Wi-Fi para computadores.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/palaca-wifi-3.jpg.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/palaca-wifi-3.jpg.jpg"],
    destaque: false
  },

  {
    id: "placa-mae-machinist",
    nome: "Placa-mãe Machinist",
    categoria: "Informática",
    preco: 165000,
    descricao: "Placa-mãe para setups avançados.",
    imagem: "https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/placa-mae-machinist-E5MR9A-PRO-MAX-SET.jpg",
    imagens: ["https://raw.githubusercontent.com/Ernestosantos90/basico-shopp-assets/main/placa-mae-machinist-E5MR9A-PRO-MAX-SET.jpg"],
    destaque: false
  }

];

/* 🔧 JUNTA COM O ARRAY PRINCIPAL */
PRODUTOS.push(...PRODUTOS_UNITARIOS);

