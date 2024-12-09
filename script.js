// Função para adicionar comportamento ao formulário de contato
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
    this.reset();
});
