//VALIDACION PARA QUE SE INGRESE TEXTO EN INPUT Y EN TEXT AREA

window.validateText = (textList) => {
  if (textList.length > 0) {
    return true;
  } else {
    return false;
  }
}

window.validateTextArea = (inputTextCard) => {
  if (inputTextCard.length > 0) {
    return true;
  } else {
    return false;
  }
}

//FOCUS PARA TEXTOS INGRESADOS
window.focusTextInput = (nameList) =>{
  nameList.focus();
};

window.focusTextInput = (nameCard) =>{
  nameCard.focus();
};