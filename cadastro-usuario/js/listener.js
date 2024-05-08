import * as bora from "./validar.js";

const nome = document.querySelector("#inputName");
const ano = document.querySelector("#inputYear");
const email = document.querySelector("#inputEmail");
const senha = document.querySelector("#inputPassword");
const helpSenha = document.querySelector("#inputPasswordHelp");
const passStrengthMeter = document.querySelector("#passStrengthMeter");
const eye = document.querySelector("#eye");

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
    const dados = {
      meter: passStrengthMeter,
      input: e,
      target: { senha: e.target.value, nome: nome.value, ano: ano.value },
    };
    if (e.target.value.length > 5) {
      bora.validarSenha(dados);
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
      bora.validarSenha(dados);
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
