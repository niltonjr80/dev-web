import * as bora from "./validar.js";

const nome = document.querySelector("#inputName");
const ano = document.querySelector("#inputYear");
const email = document.querySelector("#inputEmail");
const senha = document.querySelector("#inputPassword");

if (nome) {
  nome.addEventListener("focusout", (e) => {
    bora.validarNome(e);
  });
}

if (ano) {
  ano.addEventListener("focusout", (e) => {
    bora.validarAno(e);
  });
}

if (email) {
  email.addEventListener("focusout", (e) => {
    bora.validarEmail(e);
  });
}

if (senha) {
  senha.addEventListener("focusout", (e) => {
    const nivel = document.querySelector("#passStrengthMeter");
    const dados = {
      level: nivel,
      input: e,
      target: { senha: e.target.value, nome: nome.value, ano: ano.value },
    };

    bora.validarSenha(dados);
  });
}
