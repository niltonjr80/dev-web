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
const elemMsgSucesso = document.querySelector("#msgSucesso");
const elemMsgError = document.querySelector("#msgError");

let nomeValido = false;
let anoValido = false;
let emailValido = false;
let senhaValida = false;

if (btnEnviar) {
  btnEnviar.addEventListener("click", () => {
    const formValido = nomeValido && anoValido && emailValido && senhaValida;
    if (formValido) {
      help.msgSaveSuccess(elemMsgSucesso, elemMsgError);
    } else {
      help.msgSaveError(elemMsgError, elemMsgSucesso);
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
  senha.addEventListener("input", (e) => {
    const dados = {
      meter: passStrengthMeter,
      input: e,
      target: { senha: e.target.value, nome: nome.value, ano: ano.value },
    };
    if (e.target.value.length > 5) {
      senhaValida = bora.validarSenha(dados);
    }
  });

  senha.addEventListener("focusout", (e) => {
    const qtdCaracteres = e.target.value.length;
    const dados = {
      meter: passStrengthMeter,
      input: e,
      target: { senha: e.target.value, nome: nome.value, ano: ano.value },
    };
    if (qtdCaracteres < 6) {
      senhaValida = bora.validarSenha(dados);
    }
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

// Verificar se o formulário está válido ao carregar a página
/* help.atualizarBotaoEnvio(
  btnEnviar,
  elemMsgSucesso,
  nomeValido,
  anoValido,
  emailValido,
  senhaValida,
); */
