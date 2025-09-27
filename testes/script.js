// Espera o documento HTML ser completamente carregado para executar o script
document.addEventListener("DOMContentLoaded", function() {

    // 1. Seleciona TODOS os cabeçalhos de accordion da página
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    // 2. Itera sobre cada cabeçalho encontrado
    accordionHeaders.forEach(header => {

        // 3. Adiciona um "ouvinte" de evento de clique a cada um deles
        header.addEventListener("click", function() {

            // 4. Adiciona ou remove a classe 'active' do cabeçalho clicado.
            // Isso serve para o feedback visual que definimos no CSS.
            this.classList.toggle("active");

            // 5. Encontra o painel de conteúdo que é o "próximo irmão" do cabeçalho.
            // Ou seja, o .accordion-content que vem logo depois do .accordion-header.
            const content = this.nextElementSibling;

            // 6. Verifica se o painel de conteúdo já tem uma altura máxima definida (se está aberto)
            if (content.style.maxHeight) {
                // Se estiver aberto, fecha o painel definindo a altura máxima como null (ou '0')
                content.style.maxHeight = null;
            } else {
                // Se estiver fechado, abre o painel.
                // A altura máxima é definida como a altura total do seu conteúdo interno (scrollHeight).
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});