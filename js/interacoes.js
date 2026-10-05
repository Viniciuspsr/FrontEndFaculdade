// Elementos do compartilhamento
const botaoCompartilhar = document.querySelector(".btn-compartilhar");
const toast = document.querySelector(".toast");

// Elementos do modal
const botaoVoluntario = document.querySelector(".btn-voluntario");
const modal = document.querySelector(".modal");
const botaoCancelar = document.querySelector(".btn-cancelar");
const botaoConfirmar = document.querySelector(".btn-confirmar");

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