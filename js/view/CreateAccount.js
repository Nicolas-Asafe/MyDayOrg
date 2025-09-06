import storage from "../storage.js";
import UsuarioController from "../controllers/UsuarioController.js";

function CreateAccount() {
    const formInput = document.querySelector(".form-input-NAME-createAccount");
    const form = document.querySelector(".form-createAccount");

    if (!formInput || !form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nome = formInput.value.trim();
        if (!nome) {
            alert("Por favor, digite seu nome.");
            return;
        }
        UsuarioController.CriarUsuario(nome);
        window.location.href = "/pages/home.html";
    });
}

export default CreateAccount;
