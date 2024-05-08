import * as bora from "./validar.js";
import { updateMeter } from "./help.js";

const nome = document.querySelector("#inputName");
const ano = document.querySelector("#inputYear");
const email = document.querySelector("#inputEmail");
const senha = document.querySelector("#inputPassword");
const passStrengthMeter = document.querySelector("#passStrengthMeter");

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
  senha.addEventListener("input", (e) => {
    const qtdCaracteres = e.target.value.length;
    const dados = {
      meter: passStrengthMeter,
      input: e,
      target: { senha: e.target.value, nome: nome.value, ano: ano.value },
    };
    if (qtdCaracteres > 0 && qtdCaracteres < 6) {
      senha.addEventListener("focusout", (e) => {
        bora.validarSenha(dados);
      });
    } else {
      bora.validarSenha(dados);
    }
  });
}
