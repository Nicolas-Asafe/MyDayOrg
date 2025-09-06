import CreateAccount from "./view/CreateAccount.js";
import Home from "./view/Home.js";
import storage from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {
  const usuario = storage.CarregarUsuario();

  if (usuario) {
    Home();
    return;
  }

  CreateAccount();
});
