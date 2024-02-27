/* Función suma */
var suma = function suma (a, b) {
	return a + b;	
};

/* Función resta */
var resta = function suma (a, b) {
	return a - b;	
};


/* Función multiplicacion */

var multiplicacion = function multiplicacion(a, b) {
  return a * b;
}


/* Función division */

var division = function division (a, b) {
  return a / b;
}


/* Exportación de funciones */
module.exports = {
	suma,
	resta,
	multiplicacion,
	division
}

