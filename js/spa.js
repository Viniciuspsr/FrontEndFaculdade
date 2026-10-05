import { projetos } from "./projetos.js";
const linkProjetos = document.querySelector("#link-projetos");
const linkInicio = document.querySelector("#link-inicio");

function renderizarConteudo(rota) {
  const app = document.querySelector("#app");

  if (rota === "inicio") {
    app.innerHTML = `
        <section class="secao-principal">
            <div class="conteudo-principal">
                <h1>Transformando vidas</h1>

                <p>
                    Nossa ONG trabalha para promover mudanças positivas
                    na comunidade e ajudar quem mais precisa.
                </p>
            </div>

            <div class="imagem-placeholder">
                <img
                    src="../imagens/imagem_ong.jpg"
                    alt="Imagem da ONG"
                >
            </div>
        </section>

        <section class="projetos">
            <h2>Nossos projetos</h2>

            <div class="lista-projetos">

                <article class="projeto">
                    <span class="badge">Ativo</span>
                    <h3>Projeto Social</h3>
                    <p>
                        Descrição do primeiro projeto da organização.
                    </p>
                </article>

                <article class="projeto">
                    <span class="badge-novo">Novo</span>
                    <h3>Projeto Educação</h3>
                    <p>
                        Descrição do segundo projeto da organização.
                    </p>
                </article>

                <article class="projeto">
                    <span class="badge">Ativo</span>
                    <h3>Projeto Meio Ambiente</h3>
                    <p>
                        Descrição do terceiro projeto da organização.
                    </p>
                </article>

            </div>
        </section>

        <section class="sobre">
            <h2>Sobre a ONG</h2>

            <p>
                Somos uma organização dedicada a desenvolver ações
                sociais e contribuir para uma comunidade melhor.
            </p>
        </section>
    `;
  }

  if (rota === "projetos") {
    const cardsProjetos = projetos.map(function (projeto) {
      return `
                <article class="projeto">
                    <h3>${projeto.nome}</h3>
                    <p>
                        ${projeto.descricao}
                    </p>
                </article>
            `;
    });

    const htmlProjetos = cardsProjetos.join("");

    app.innerHTML = `
            <section class="projetos">
                <h2>Nossos projetos</h2>

                <div class="lista-projetos">
                    ${htmlProjetos}
                </div>
            </section>
        `;
  }
}

// Evento do link Projetos
if (linkProjetos) {
  linkProjetos.addEventListener("click", function (event) {
    event.preventDefault();

    const rota = "projetos";

    renderizarConteudo(rota);
  });
}

// Evento do link Início
if (linkInicio) {
  linkInicio.addEventListener("click", function (event) {
    event.preventDefault();

    const rota = "inicio";

    renderizarConteudo(rota);
  });
}