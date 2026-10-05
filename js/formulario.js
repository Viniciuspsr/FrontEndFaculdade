// Elementos do formulário
const formulario = document.getElementById("form-cadastro");


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