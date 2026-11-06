document.addEventListener("DOMContentLoaded", () => {

    // ANO AUTOMÁTICO NO RODAPÉ

    const ano = document.querySelector("footer p:last-child");

    if (ano) {
        ano.textContent =
            `© ${new Date().getFullYear()} Editora Atalaia. Todos os direitos reservados.`;
    }


    // CONTROLE DOS ÁUDIOS
    // Evita a reprodução simultânea de várias aulas.

    const audios = document.querySelectorAll("audio");

    audios.forEach(audio => {

        audio.addEventListener("play", () => {

            audios.forEach(outroAudio => {

                if (outroAudio !== audio) {
                    outroAudio.pause();
                }

            });

        });

    });


    // VERIFICAÇÃO DAS IMAGENS

    const imagens = document.querySelectorAll(".imagem-aula");

    imagens.forEach(imagem => {

        imagem.addEventListener("error", () => {
            imagem.style.display = "none";
        });

    });


    // IDENTIFICA LINKS NÃO CADASTRADOS

    const links = document.querySelectorAll(
        ".btn-flipbook, .btn-questionario, .btn-geral"
    );

    links.forEach(link => {

        link.addEventListener("click", event => {

            const destino = link.getAttribute("href");

            if (!destino || destino === "#") {
                event.preventDefault();
                alert("Este conteúdo ainda não foi disponibilizado.");
            }

        });

    });

});