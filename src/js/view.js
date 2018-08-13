//FUNCION DE BOTON PARA AÑADIR LISTA
window.addList = () => {
  const list = document.getElementById('addingList');
  list.innerHTML =
    `<div id="styleAddingList">
      <form class="form-inline">
        <input type="text" id="nameList" placeholder=" Introduzca el título de la lista...">
      </form>
     <button class="btn btn-info" onclick="addNewList(id)"><strong>Añadir lista</strong></button>
     <button id="closeBtn" onclick="closeAddList()"><i class="fas fa-times"></i></button>
    </div>
  `;
  window.focusTextInput(document.getElementById('nameList'));
}

//FUNCION PARA CERRAR AÑADIR LISTA
window.closeAddList = () => {
  const list = document.getElementById('addingList');
  list.innerHTML =
    `<button id="addCard" onclick="window.addList()"><i class="fas fa-plus" id="iconaddCard"></i><h2 id="titleAddList"> Añada otra lista</h2></button>`;
}

//FUNCION QUE AÑADE LA NUEVA LISTA EN UN NUEVO DIV
window.addNewList = (id) => {
  let textList = document.getElementById('nameList').value;
  if (window.validateText(textList)) {
    document.getElementById('nameList').value = '';
    const newTextList = document.getElementById('listCard');
    let id = document.getElementsByClassName('numDivs').length;
    newTextList.innerHTML += `
    <div id="listBox" class="form-inline numDivs">
      <div id="listText"><strong>${textList}</strong></div>
      <button id="btnNewCard${id}" class="btnNewCard" onclick="addNewCard(${id})"><i class="fas fa-plus" id="iconaddCard"></i><h2 id="titleAddList2"> Añada una tarjeta</h2></button>
      <div id="containerCards${id}">
        <div id="listTextCard${id}"></div>
      </div>
    </div>
    `
  }
}

//FUNCION PARA AGREGAR NUEVA TARJETA DENTRO DE LISTA
window.addNewCard = (id) => {
  const container = document.getElementById('containerCards' + id);
  document.getElementById('btnNewCard' + id).style.display = 'none';
  container.innerHTML += `
    <textarea id="nameCard${id}" class="nameCard" placeholder=" Introduzca un título para esta tarjeta..."></textarea>
    <button class="btn btn-info" id="btnAddNewCard${id}" onclick="addCard(${id})"><strong>Añadir tarjeta</strong></button>
    <button id="closeBtn2${id}" class="closeBtn2" onclick="closeAddCard(${id})"><i class="fas fa-times"></i></button>
  `;
}

//FUNCION QUE IMPRIME TARJETA EN LISTA
window.addCard = (id) => {
  let inputTextCard = document.getElementById('nameCard' + id).value;
  if (window.validateTextArea(inputTextCard)) {
    const textArea = document.getElementById('listTextCard' + id);
    document.getElementById('nameCard' + id).value = '';
    textArea.innerHTML += `
      <div id="divCard">
        <p id="textCardhtml">${inputTextCard}</p>
      </div>
    `;
    window.focusTextInput(document.getElementById('nameCard' + id));
  }
}

//FUNCION PARA CERRAR AÑADIR TARJETA
window.closeAddCard = (id) => {
  const container = document.getElementById('containerCards' + id);
  document.getElementById('btnAddNewCard' + id).style.display = 'none';
  document.getElementById('closeBtn2' + id).style.display = 'none';
  document.getElementById('nameCard' + id).style.display = 'none';
    container.innerHTML += `
      <button id="btnNewCard" class="btnNewCard" onclick="addNewCard(${id})"><i class="fas fa-plus" id="iconaddCard"></i><h2 id="titleAddList2"> Añada una tarjeta</h2></button>
    `;
}

