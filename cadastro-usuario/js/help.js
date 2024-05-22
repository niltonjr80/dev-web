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

export { showMsgError, updateMeter };
