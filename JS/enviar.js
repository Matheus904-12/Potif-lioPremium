(function () {
    emailjs.init("vUAXa8ZYswtqNILSe"); // Substitua com o User ID correto
})();

document.getElementById("sendButton").addEventListener("click", function (event) {
    event.preventDefault(); // Impedir o comportamento padrão de envio do formulário

    // Obter os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Verificação básica para garantir que todos os campos foram preenchidos
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Parâmetros do template para envio via EmailJS
    const templateParams = {
        to_name: "Matheus Lucindo", // Nome fixo ou dinâmico
        from_name: nome, // Nome do usuário
        from_email: email, // E-mail do usuário
        mensagem: mensagem, // Mensagem do usuário
    };

    // Enviar o e-mail
    emailjs.send("service_l1slctl", "template_fh2gg0d", templateParams)
        .then(
            (response) => {
                alert("E-mail enviado com sucesso!");
                console.log("SUCCESS!", response.status, response.text);
            },
            (error) => {
                alert("Erro ao enviar o e-mail. Tente novamente mais tarde.");
                console.error("FAILED...", error);
            }
        );
});
