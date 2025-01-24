document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario");
    const erro_name_label = document.getElementById("error_name_label");
    const erro_email_label = document.getElementById("error_email_label");
    const erro_telemovel_label = document.getElementById("error_telemovel_label");

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telemovel = document.getElementById("telemovel");


    function validarCampo(campo, regex, erroLabel, mensagemErro) {
        const valor = campo.value.trim();
        if (!valor) {
            erroLabel.innerText = mensagemErro;
            campo.classList.add("invalid");
            campo.classList.remove("valid");
        } else if (regex && !regex.test(valor)) {
            erroLabel.innerText = "Formato inválido.";
            campo.classList.add("invalid");
            campo.classList.remove("valid");
        } else {
            erroLabel.innerText = "";
            campo.classList.add("valid");
            campo.classList.remove("invalid");
        }
    }

    nome.addEventListener("input", () => {
        validarCampo(nome, null, erro_name_label, "O campo 'Nome' é obrigatório.");
    });

    email.addEventListener("input", () => {
        validarCampo(email, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, erro_email_label, "O campo 'Email' é obrigatório.");
    });

    telemovel.addEventListener("input", () => {
        validarCampo(telemovel, /^\d{9}$/, erro_telemovel_label, "O campo 'Telemóvel' é obrigatório.");
    });

    form.addEventListener("submit", (evento) => {
        erro_name_label.innerText = "";
        erro_email_label.innerText = "";
        erro_telemovel_label.innerText = "";

        let validado = true;

        if (!nome.value.trim()) {
            erro_name_label.innerText = "O campo 'Nome' é obrigatório.";
            nome.classList.add("invalid");
            validado = false;
        }

        if (!email.value.trim()) {
            erro_email_label.innerText = "O campo 'Email' é obrigatório.";
            email.classList.add("invalid");
            validado = false;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
            erro_email_label.innerText = "Por favor, insira um email válido.";
            email.classList.add("invalid");
            validado = false;
        }

        if (!telemovel.value.trim()) {
            erro_telemovel_label.innerText = "O campo 'Telemóvel' é obrigatório.";
            telemovel.classList.add("invalid");
            validado = false;
        } else if (!/^\d{9}$/.test(telemovel.value)) {
            erro_telemovel_label.innerText = "Por favor, insira um número de telemóvel válido (9 dígitos).";
            telemovel.classList.add("invalid");
            validado = false;
        }

        if (!validado) {
            evento.preventDefault();
        }
    });
});
