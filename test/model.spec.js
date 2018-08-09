const assert = require('chai').assert;
global.window = global;
require('../src/js/model.js');

//Validar campos de texto
describe('Validar texto', () => { 
  describe('Debería verificar tamaño y caracteres', () => {
    it('Debería el texto tener mínimo 1 carácter', () => { 
      assert.equal(validateText("a"), true); 
      assert.equal(validateText(""), false);
    });
  });
});


