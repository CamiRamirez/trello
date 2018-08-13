const assert = require('chai').assert;
global.window = global;
require('../src/js/model.js');

//Validar campos de texto
describe('Validar texto', () => { 
  describe('Debería el input de agregar lista, tener mas de 1 caracter', () => {
    it('Debería el texto tener mínimo 1 caracter', () => { 
      assert.equal(validateText("a"), true); 
      assert.equal(validateText(""), false);
    });
  });
  describe('Debería el input de agregar tarjeta, tener mas de 1 caracter', () => {
    it('Debería el texto tener mínimo 1 caracter', () => { 
      assert.equal(validateTextArea("a"), true); 
      assert.equal(validateTextArea(""), false);
    });
  });
});


