//FUNCION DE BOTON PARA AÑADIR LISTA
window.addList = () => {
  const list = document.getElementById('addingList');
  list.innerHTML =
    `<div class="bg-white" id="styleAddingList">
  <form class="form-inline">
  <input type="text" id="nameList" placeholder=" Introduzca el título de la lista...">
  </form>
  <button class="btn btn-info" onclick="addNewList()"><strong>Añadir lista</strong></button>
  <button id="closeBtn" onclick="closeAddList()"><i class="fas fa-times"></i></button>
  </div>
  `;
}

//FUNCION PARA CERRAR AÑADIR LISTA
window.closeAddList = () => {
  const list = document.getElementById('addingList');
  list.innerHTML =
    `<button id="addCard" onclick="window.addList()"><i class="fas fa-plus" id="iconaddCard"></i><h2 id="titleAddList"> Añada una lista</h2></button>`;
}

//FUNCION QUE AÑADE LA NUEVA LISTA EN UN NUEVO DIV
window.addNewList = () => {
  let textList = document.getElementById('nameList').value;
  if (window.validateText(textList)) {
    document.getElementById('nameList').value = '';
    const newTextList = document.getElementById('listCard');
    newTextList.innerHTML += `
    <div id="listBox">
    <div id="listText"><strong>${textList}</strong></div>
    <button id="btnNewCard" onclick="addNewCard()"><i class="fas fa-plus" id="iconaddCard"></i><h2 id="titleAddList2"> Añada una tarjeta</h2></button>
    <div id="containerCards">
    <div id="listTextCard"></div>
    </div>
    </div>
    
    `;
  }
}

//FUNCION PARA AGREGAR NUEVA TARJETA DENTRO DE LISTA
window.addNewCard = () => {
  const container = document.getElementById('containerCards');
  document.getElementById('btnNewCard').style.display = 'none';
  container.innerHTML += `
  <textarea id="nameCard" placeholder=" Introduzca un título para esta tarjeta..."></textarea>
  <button class="btn btn-info" onclick="addCard()"><strong>Añadir tarjeta</strong></button>
  <button id="closeBtn2" onclick="closeAddCard()"><i class="fas fa-times"></i></button>
  `;
}

//FUNCION QUE IMPRIME TARJETA EN LISTA
window.addCard = () => {
  const container2 = document.getElementById('listTextCard');
  let inputTextCard = document.getElementById('nameCard').value;
  document.getElementById('nameCard').value = '';
  container2.innerHTML += `
  <div id="divCard">
  <p id="textCardhtml">${inputTextCard}</p>
  </div>
  `;
}

//FUNCION PARA CERRAR AÑADIR TARJETA
// window.closeAddCard = () => {

// }

