/* dev-web/cadastro-usuario/js/listener.js */

import * as bora from "./validar.js";
import * as help from "./help.js";

const nome = document.querySelector("#inputName");
const ano = document.querySelector("#inputYear");
const email = document.querySelector("#inputEmail");
const senha = document.querySelector("#inputPassword");
const passStrengthMeter = document.querySelector("#passStrengthMeter");
const eye = document.querySelector("#eye");
const btnEnviar = document.querySelector("#submitButton");
const msgErro = document.querySelector("#msgErro");
const msgSucesso = document.querySelector("#msgSucesso");

let nomeValido = false;
let anoValido = false;
let emailValido = false;
let senhaValida = false;

if (btnEnviar) {
  btnEnviar.addEventListener("click", () => {
    const formValido = nomeValido && anoValido && emailValido && senhaValida;
    if (formValido) {
      msgSucesso.textContent = "Seus dados foram registrados";
      msgSucesso.style.color = "green";
      msgErro.style.display = "none";
      msgSucesso.style.display = "";
    } else {
      msgErro.textContent = "Seus dados não foram registrados";
      msgErro.style.color = "red";
      msgSucesso.style.display = "none";
      msgErro.style.display = "";
    }
  });
}

if (nome) {
  nome.addEventListener("focusout", (e) => {
    nomeValido = bora.validarNome(e);
  });
}

if (ano) {
  ano.addEventListener("focusout", (e) => {
    anoValido = bora.validarAno(e);
  });
}

if (email) {
  email.addEventListener("focusout", (e) => {
    emailValido = bora.validarEmail(e);
  });
}

if (senha) {
  senha.addEventListener("focusout", (e) => {
    const dados = {
      meter: passStrengthMeter,
      input: e,
      target: { senha: e.target.value, nome: nome.value, ano: ano.value },
    };
    senhaValida = bora.validarSenha(dados);
  });
}

if (eye) {
  eye.addEventListener("click", () => {
    if (senha.type === "password") {
      senha.type = "text";
      eye.src = "./images/eye.png";
    } else {
      senha.type = "password";
      eye.src = "./images/hidden.png";
    }
  });
}
