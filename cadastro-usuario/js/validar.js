/* dev-web/cadastro-usuario/js/validar.js */

import * as help from "./help.js";

// Função para validar o nome de usuário
function validarNome(e) {
  if (!e.target.value) {
    help.showMsgError(e.target, " ", "");
  }

  const regexNome = /^(?=.{6,}$)[a-zA-Z ]*$/;

  if (e.target.value.trim().match(regexNome) == null) {
    help.showMsgError(e.target, "Nome inválido", "red");
    return false;
  } else {
    help.showMsgError(e.target, "", "");
    return true;
  }
}

function validarAno(e) {
  if (!e.target.value) {
    help.showMsgError(e.target, " ", "");
    return false;
  }
  const regexAno = /^(19(0[4-9]|[1-9][0-9])|20([0-1][0-9]|20|21|22|23))$/;

  const ano = e.target;
  const anoTrimado = ano.value.trim();

  if (anoTrimado.match(regexAno) == null) {
    help.showMsgError(ano, "Ano inválido", "red");
    return false;
  } else {
    help.showMsgError(ano, "", "");
    return true;
  }
}

function validarEmail(e) {
  if (!e.target.value) {
    help.showMsgError(e.target, " ", "");
    return false;
  }
  const email = e.target.value.trim();
  const regexEmail =
    /^[a-zA-Z0-9._%]+@[a-zA-Z0-9-]+\.(?:com|net|org|br|com\.br)$/;

  let count = 0;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === ".") {
      count++;
    }
  }

  if (!regexEmail.test(email) || count > 2) {
    help.showMsgError(e.target, "Formato de email inválido", "red");
    return false;
  } else {
    help.showMsgError(e.target, "", "");
    return true;
  }
}

function validarSenha(dados) {
  // Extrair as propriedades do objeto JSON
  const { senha, nome, ano } = dados.target;
  const e = dados.input;
  const meter = dados.meter;
  if (!senha) {
    help.showMsgError(e.target, " ", "");
    help.updateMeter(meter, 0);
    return false;
  }

  // Verificar se a senha contém o nome ou o ano de nascimento do usuário
  if (nome && ano) {
    if (
      senha.toLowerCase().includes(nome.toLowerCase()) ||
      senha.includes(ano)
    ) {
      if (e) {
        help.showMsgError(e.target, "Senha inválida", "red");
        help.updateMeter(meter, 0);
      }
      return false;
    }
  }
  // Verificar comprimento da senha
  if (senha.length < 6 || senha.length > 20) {
    if (e) {
      help.showMsgError(e.target, "Senha inválida", "red");
      help.updateMeter(meter, 0);
    }
    return false;
  }

  // Verificar a presença de caracteres especiais, números e letras
  const temCaractereEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
    senha,
  );
  const temNumero = /[0-9]+/.test(senha);
  const temLetra = /[a-zA-Z]+/.test(senha);
  const temLetraMaiuscula = /[A-Z]/.test(senha);

  if (!temCaractereEspecial || !temNumero || !temLetra) {
    if (e) {
      help.showMsgError(e.target, "Senha inválida", "orange");
      help.updateMeter(meter, 0);
    }
    return false;
  }

  // Verificar o nível de segurança da senha
  if (senha.length < 8) {
    if (e) {
      help.showMsgError(e.target, "Senha fraca", "red");
      help.updateMeter(meter, e.target.value.length);
    }
    return "fraca";
  } else if (senha.length >= 8 && senha.length < 12 && temLetraMaiuscula) {
    if (e) {
      help.showMsgError(e.target, "Senha moderada", "brown");
      help.updateMeter(meter, e.target.value.length);
    }
    return "moderada";
  } else {
    // Contar caracteres especiais, números e letras maiúsculas
    const numCaracteresEspeciais = [...senha].filter((c) =>
      "!@#$%^&*()_+\\-=\\[\\]{};'\\:\"|,.<>/?".includes(c),
    ).length;
    const numNumeros = senha.split("").filter((c) => /[0-9]/.test(c)).length;
    const numLetrasMaiusculas = senha
      .split("")
      .filter((c) => /[A-Z]/.test(c)).length;

    if (
      numCaracteresEspeciais > 1 &&
      numNumeros > 1 &&
      numLetrasMaiusculas > 1
    ) {
      if (e) {
        help.showMsgError(e.target, "Senha forte", "green");
        help.updateMeter(meter, e.target.value.length);
      }
      return "forte";
    } else {
      if (e) {
        help.showMsgError(e.target, "Senha moderada", "brown");
        help.updateMeter(meter, e.target.value.length);
      }
      return "moderada";
    }
  }
}

export { validarNome, validarAno, validarEmail, validarSenha };
