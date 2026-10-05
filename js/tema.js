// Modo escuro
const botaoTema = document.querySelector("#botao-tema");

if (botaoTema) {
    botaoTema.addEventListener("click", function () {
        document.body.classList.toggle("tema-escuro");

        const preferencias = {
            tema: document.body.classList.contains("tema-escuro")
                ? "escuro"
                : "claro"
        };

        localStorage.setItem(
            "preferencias",
            JSON.stringify(preferencias)
        );
    });
}

const preferenciasSalvas = localStorage.getItem("preferencias");

if (preferenciasSalvas) {
    const preferencias = JSON.parse(preferenciasSalvas);

    if (preferencias.tema === "escuro") {
        document.body.classList.add("tema-escuro");
    }
}