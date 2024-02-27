// Ejemplo de test utilizando el módulo assert disponible en NodeJS

// Cargar el módulo assert
var assert = require('assert');

// Cargar el módulo con las funciones para testear
var operaciones = require('../operations.js');

// Test
it('comprobar función multiplicacion', function() {
	assert.equal(operaciones.multiplicacion(1,3), 3);
	assert.equal(operaciones.multiplicacion(3,4), 12);
	assert.equal(operaciones.multiplicacion(10,10), 100);
});



