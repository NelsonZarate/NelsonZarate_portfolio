document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formulario");
    const erro_name_label = document.getElementById("error_name_label");
    const erro_email_label = document.getElementById("error_email_label");
    const erro_telemovel_label = document.getElementById("error_telemovel_label");

    form.addEventListener("submit", (evento) => {
        erro_name_label.innerText = "";
        erro_email_label.innerText = "";
        erro_telemovel_label.innerText = "";

        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telemovel = document.getElementById("telemovel").value;

        let validado = true;

        if (!nome.trim()) {
            erro_name_label.innerText = "O campo 'Nome' é obrigatório.";
            validado = false;
            
        }

        if (!email.trim()) {
            erro_email_label.innerText = "O campo 'Email' é obrigatório.";
            validado = false;

        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            erro_email_label.innerText = "Por favor, insira um email válido.";
            validado = false;
        }

        if (!telemovel.trim()) {
            erro_telemovel_label.innerText = "O campo 'Telemóvel' é obrigatório.";
            validado = false;
        } else if (!/^\d{9}$/.test(telemovel)) {
            erro_telemovel_label.innerText = "Por favor, insira um número de telemóvel válido (9 dígitos).";
            validado = false;
        }

        if (!validado) {
            evento.preventDefault();
        }
    });
});
