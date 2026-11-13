const produtos = [
  {
    nome: "Notebook",
    preco: 3500,
    imagem: "Imagens/notebook.jpg",
    descricao:"Notebook compacto e profissional (modelo Lenovo ThinkPad) com tela de alta definição, teclado embutido e acabamento na cor preta."
  },
  {
    nome: "Mouse",
    preco: 120,
    imagem: "Imagens/mouse.jpg",
    descricao:"Mouse ergonômico com design moderno, botões laterais e detalhes iluminados, ideal para navegação e jogos."
  },
  {
    nome: "Teclado",
    preco: 250,
    imagem: "Imagens/teclado.jpg",
    descricao:"Teclado mecânico com iluminação LED colorida (RGB) sob as teclas, projetado para oferecer maior precisão e conforto ao digitar ou jogar."
  },
  {
    nome: "Headset",
    preco: 110,
    imagem: "Imagens/Headset.jpg",
    descricao: "Fone de ouvido do tipo over-ear focado em jogos, equipado com microfone ajustável com espuma e almofadas confortáveis para uso prolongado."
  }
];

// Cria um card reutilizável para cada produto
function criarCard(produto) {
  const card = document.createElement("article");
  card.className = "card";

  const imagem = document.createElement("img");
  imagem.src = produto.imagem;
  imagem.alt = produto.nome;

  const nome = document.createElement("h3");
  nome.textContent = produto.nome;

  const preco = document.createElement("p");
  preco.className = "preco";
  preco.textContent = produto.preco.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  );

  const botao = document.createElement("button");
  botao.type = "button";
  botao.textContent = "Ver detalhes";
  botao.setAttribute("aria-expanded", "false");

  botao.addEventListener("click", function() {
    const aberto = detalhes.classList.toggle("aberto");
    botao.textContent = aberto ? "Ocultar Detalhes" : "Ver Detalhes";
    botao.setAttribute("aria-expanded", aberto);
  });

  const detalhes = document.createElement("div");
  detalhes.className = "detalhes";

  const conteudo = document.createElement("div");
  conteudo.className = "detalhes-conteudo";

  const descricao = document.createElement("p");
  descricao.textContent = produto.descricao;

  conteudo.appendChild(descricao);
  detalhes.appendChild(conteudo);

  card.append(imagem, nome, preco,detalhes, botao);
  return card;
}

// Exibe cada card no catálogo
function mostrarProdutos() {
  const lista = document.getElementById(
    "lista-produtos"
  );

  produtos.forEach(function(produto) {
    const card = criarCard(produto);
    lista.appendChild(card);
  });
}

mostrarProdutos();