// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función division', function() {
	assert.equal(operaciones.division(3,1), 3);
	assert.equal(operaciones.division(12,4), 3);
	assert.equal(operaciones.division(10,10), 1);
});



