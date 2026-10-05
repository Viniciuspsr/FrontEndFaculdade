// Elementos do formulário
const formulario = document.getElementById("form-cadastro");
const alerta = document.querySelector(".alert");

// Elementos do compartilhamento
const botaoCompartilhar = document.querySelector(".btn-compartilhar");
const toast = document.querySelector(".toast");

// Elementos do modal
const botaoVoluntario = document.querySelector(".btn-voluntario");
const modal = document.querySelector(".modal");
const botaoCancelar = document.querySelector(".btn-cancelar");
const botaoConfirmar = document.querySelector(".btn-confirmar");

// Elementos da navegação
const linkProjetos = document.querySelector("#link-projetos");
const linkInicio = document.querySelector("#link-inicio");

// Formulário de cadastro
if (formulario) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const mensagens = formulario.querySelectorAll(".mensagem-erro");

        mensagens.forEach(function (mensagem) {
            mensagem.remove();
        });

        const campos = formulario.querySelectorAll("[required]");

        campos.forEach(function (campo) {
            if (campo.value === "") {
                campo.style.border = "2px solid red";

                const mensagem = document.createElement("span");
                mensagem.classList.add("mensagem-erro");
                mensagem.textContent = "Preencha este campo.";

                campo.insertAdjacentElement("afterend", mensagem);
            }
        });

        campos.forEach(function (campo) {
            campo.addEventListener("input", function () {
                if (campo.value !== "") {
                    campo.style.border = "";

                    const mensagem = campo.nextElementSibling;

                    if (
                        mensagem &&
                        mensagem.classList.contains("mensagem-erro")
                    ) {
                        mensagem.remove();
                    }
                }
            });
        });
    });
}

// Botão de compartilhamento
if (botaoCompartilhar) {
  botaoCompartilhar.addEventListener("click", function () {
    toast.style.display = "inline-block";

    setTimeout(function () {
      toast.style.display = "none";
    }, 3000);
  });
}

// Botão para abrir o modal
if (botaoVoluntario) {
  botaoVoluntario.addEventListener("click", function () {
    modal.style.display = "flex";
  });
}

// Botão para cancelar o modal
if (botaoCancelar) {
  botaoCancelar.addEventListener("click", function () {
    modal.style.display = "none";
  });
}

// Botão para confirmar o modal
if (botaoConfirmar) {
  botaoConfirmar.addEventListener("click", function () {
    modal.style.display = "none";
  });
}

// Link de projetos
if (linkProjetos) {
  linkProjetos.addEventListener("click", function (event) {
    event.preventDefault();

    const rota = "projetos";

    renderizarConteudo(rota);
  });
}

// Link de início
if (linkInicio) {
  linkInicio.addEventListener("click", function (event) {
    event.preventDefault();

    const rota = "inicio";

    renderizarConteudo(rota);
  });
}

// Dados dos projetos
const projetos = [
  {
    id: 1,
    nome: "Projeto Social",
    descricao: "Descrição do primeiro projeto da organização. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim excepturi praesentium magnam omnis dolorum rerum impedit a eaque ab consequuntur dignissimos non placeat distinctio sapiente incidunt, maxime obcaecati nesciunt! Soluta?"
  },
  {
    id: 2,
    nome: "Projeto Educação",
    descricao: "Descrição do segundo projeto da organização. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, pariatur necessitatibus! Repellat deserunt esse voluptatum odit, repudiandae consectetur consequatur nobis non iure. Cum distinctio deserunt fuga aut est possimus exercitationem!"
  },
  {
    id: 3,
    nome: "Projeto Meio Ambiente",
    descricao: "Descrição do terceiro projeto da organização. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus beatae perferendis quibusdam ipsam doloribus sint fugit dolorem non rem quod, quos neque animi a id quaerat doloremque quisquam tenetur numquam?"
  },
  {
    id: 4,
    nome: "Projeto Esporte",
    descricao: "..."
  }
];

// Renderização das rotas
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