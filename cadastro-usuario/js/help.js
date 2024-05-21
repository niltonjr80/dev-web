/* dev-web/cadastro-usuario/js/help.js */

function showMsgError(inputElement, mensagem, cor) {
  const helpElement = inputElement.nextElementSibling; // Assume que o elemento de ajuda é o próximo irmão do input

  if (helpElement) {
    helpElement.textContent = mensagem;
    helpElement.style.color = cor;

    const associatedElementSelector = inputElement.dataset.associatedElement;
    const associatedElement = document.querySelector(associatedElementSelector);

    if (associatedElement) {
      if (
        mensagem === "" ||
        mensagem == "Senha fraca" ||
        mensagem == "Senha moderada" ||
        mensagem == "Senha forte"
      ) {
        associatedElement.classList.remove("d-none");
      } else {
        associatedElement.classList.add("d-none");
      }
    }
  }
}

function updateMeter(passStrengthMeter, value) {
  if (value == 0) {
    passStrengthMeter.classList.add("d-none");
  } else {
    passStrengthMeter.classList.remove("d-none");
    passStrengthMeter.classList.add("d-block");
    passStrengthMeter.value = value;
  }
}

/* function atualizarBotaoEnvio(
  btnEnviar,
  elemMsgSucesso,
  nomeValido,
  anoValido,
  emailValido,
  senhaValida,
) {
  const formValido = nomeValido && anoValido && emailValido && senhaValida;
  if (!formValido) {
    btnEnviar.disabled = true;
    btnEnviar.classList.remove("btn-primary");
    btnEnviar.classList.remove("btn-block");
    btnEnviar.classList.add("btn-outline-secondary");
    atualizarMsgSucesso(elemMsgSucesso, formValido);
  } else {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("btn-outline-secondary");
    btnEnviar.classList.add("btn-primary");
    btnEnviar.classList.add("btn-lg");
    btnEnviar.classList.add("btn-block");
  }
} */

function msgSaveSuccess(elemMsgSucesso, elemMsgError) {
  elemMsgSucesso.classList.remove("d-none");
  elemMsgError.classList.add("d-none");
}

function msgSaveError(elemMsgError, elemMsgSucesso) {
  elemMsgSucesso.classList.add("d-none");
  elemMsgError.classList.remove("d-none");
}

export { showMsgError, updateMeter, msgSaveError, msgSaveSuccess };
