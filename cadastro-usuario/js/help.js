function showMsgError(inputElement, mensagem, cor) {
  const helpElement = inputElement.nextElementSibling; // Assume que o elemento de ajuda é o próximo irmão do input

  if (helpElement) {
    helpElement.textContent = mensagem;
    helpElement.style.color = cor;

    // Lógica opcional para ocultar ou mostrar um elemento associado ao input
    const associatedElementSelector = inputElement.dataset.associatedElement; // Supõe que o elemento associado é especificado no atributo de dados "data-associated-element" do input
    const associatedElement = document.querySelector(associatedElementSelector);

    if (associatedElement) {
      if (mensagem === "") {
        associatedElement.classList.remove("d-none");
      } else {
        associatedElement.classList.add("d-none");
      }
    }
  }
}

function updateMeter(passStrengthMeter, value) {
  passStrengthMeter.value = value;
}

export { showMsgError, updateMeter };
