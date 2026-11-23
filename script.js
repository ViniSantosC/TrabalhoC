let number = 1;
let respondeu = false;

const opcao1 = document.getElementById("opcao1");
const opcao2 = document.getElementById("opcao2");
const opcao3 = document.getElementById("opcao3");
const opcao4 = document.getElementById("opcao4");
const texto = document.getElementById("texto");
const explica = document.getElementById("explica");
const qp = document.getElementById("QP");
const btnProximo = document.getElementById("proximo");

function revelarRespostas(opcaoEscolhida) {
  respondeu = true;
  explica.classList.add("aparece");

  if (number === 1) {
    opcao1.classList.add("opcaof");
    opcao2.classList.add("opcaov");
    opcao3.classList.add("opcaof");
    opcao4.classList.add("opcaof");

    if (opcaoEscolhida === opcao2) {
      explica.classList.add("acerto");
      texto.innerHTML = `<strong>Isso mesmo</strong><br>Durante o regime militar (1964–1985), os presidentes eram escolhidos de forma indireta pelo Congresso Nacional ou por um Colégio Eleitoral controlado pelos militares.`;
    } else {
      explica.classList.add("erro");
      texto.innerHTML = `<strong>Na verdade…</strong><br>A alternativa correta é a B. Durante o regime militar, o voto direto para presidente foi suspenso, e a escolha era feita de forma indireta por um Colégio Eleitoral.
`;
    }
  } else if (number === 2) {
    opcao1.classList.add("opcaof");
    opcao2.classList.add("opcaof");
    opcao3.classList.add("opcaov");
    opcao4.classList.add("opcaof");

    if (opcaoEscolhida === opcao3) {
      explica.classList.add("acerto");
      texto.innerHTML = `<strong>Isso mesmo</strong><br>O AI-5, decretado em dezembro de 1968, deu plenos poderes ao presidente, suspendeu o habeas corpus para crimes políticos e institucionalizou a censura prévia.`;
    } else {
      explica.classList.add("erro");
      texto.innerHTML = `<strong>Na verdade…</strong><br>A alternativa correta é a C. O AI-5 marcou o início dos chamados "Anos de Chumbo", período de maior repressão e censura do regime.
`;
    }
  } else if (number === 3) {
    opcao1.classList.add("opcaov");
    opcao2.classList.add("opcaof");
    opcao3.classList.add("opcaof");
    opcao4.classList.add("opcaof");

    if (opcaoEscolhida === opcao1) {
      explica.classList.add("acerto");
      texto.innerHTML = `<strong>Isso mesmo</strong><br>O governo mantinha órgãos de censura prévia que vetavam letras de músicas, peças de teatro, filmes e notícias antes mesmo de chegarem ao público.`;
    } else {
      explica.classList.add("erro");
      texto.innerHTML = `<strong>Na verdade…</strong><br>A alternativa correta é a A. Jornais, emissoras e artistas tinham suas obras analisadas previamente pelos censores do governo e frequentemente sofriam cortes ou proibições.`;
    }
  } else if (number === 4) {
    opcao1.classList.add("opcaof");
    opcao2.classList.add("opcaof");
    opcao3.classList.add("opcaof");
    opcao4.classList.add("opcaov");

    if (opcaoEscolhida === opcao4) {
      explica.classList.add("acerto");
      texto.innerHTML = `<strong>Isso mesmo</strong><br>O movimento Diretas Já (1983–1984) reuniu milhões de pessoas nas ruas do Brasil em apoio à Emenda Dante de Oliveira, pressionando pelo fim da ditadura e pela volta das eleições diretas.`;
    } else {
      explica.classList.add("erro");
      texto.innerHTML = `<strong>Na verdade…</strong><br>A alternativa correta é a D. O movimento Diretas Já levou multidões às praças de todo o país exigindo o direito da população voltar a eleger o presidente pelo voto direto.
`;
    }
  }
}

[opcao1, opcao2, opcao3, opcao4].forEach((opcao) => {
  opcao.addEventListener("click", () => {
    if (respondeu) return;
    revelarRespostas(opcao);
  });
});

btnProximo.addEventListener("click", (event) => {
  event.preventDefault();

  if (respondeu === true) {
    btnProximo.classList.remove("exemplo");
    explica.classList.remove("aparece", "acerto", "erro");
      texto.innerHTML = "";

    const pergunta = document.getElementById("pergunta");

    [opcao1, opcao2, opcao3, opcao4].forEach((el) => {
      el?.classList.remove("opcaov", "opcaof");
    });

    number++;
    respondeu = false;

    if (number === 2) {
      qp.innerHTML = `Pergunta 2 de 4`;
      pergunta.innerHTML = `Qual foi o decreto de 1968 que endureceu a ditadura, fechou o Congresso e suspendeu direitos políticos?`;
      opcao1.innerHTML = `<span>A</span>Constituição de 1988.`;
      opcao2.innerHTML = `<span>B</span>Lei da Anistia.`;
      opcao3.innerHTML = `<span>C</span> Ato Institucional nº 5 (AI-5).`;
      opcao4.innerHTML = `<span>D</span>Plano Cruzado.`;
    } else if (number === 3) {
      qp.innerHTML = `Pergunta 3 de 4`;
      pergunta.innerHTML = `Como funcionava a censura aos meios de comunicação e artistas durante o regime militar?`;
      opcao1.innerHTML = `<span>A</span> Músicas, filmes e jornais passavam por análise prévia e podiam ser proibidos.`;
      opcao2.innerHTML = `<span>B</span> Apenas canais de televisão estrangeiros eram fiscalizados.`;
      opcao3.innerHTML = `<span>C</span> Não havia censura, apenas multas após a publicação.`;
      opcao4.innerHTML = `<span>D</span> A censura atingia somente livros escolares.`;
    } else if (number === 4) {
      qp.innerHTML = `Pergunta 4 de 4`;
      pergunta.innerHTML = `Qual grande mobilização popular dos anos 1980 exigiu o retorno do voto popular para presidente?`;
      opcao1.innerHTML = `<span>A</span> Revolta da Vacina.`;
      opcao2.innerHTML = `<span>B</span> Semana de Arte Moderna.`;
      opcao3.innerHTML = `<span>C</span> Caras-Pintadas.`;
      opcao4.innerHTML = `<span>D</span> Diretas Já.`;
    } else if (number === 5) {
      window.location.href = "simulacao.html";
    }
  } else {
    btnProximo.classList.add("exemplo");
     
  }
});
