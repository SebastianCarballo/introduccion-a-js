function probarValidarFunctionCalcularSalarioMensual() {
	console.assert(calcularSalarioMensual(12, 12) === 1, 'El calculo de la función calcularSalarioMensual no dio 1');
}

function probarValidarInputSalarioAnualUsuario() {
	console.assert(
		validarInputSalarioAnualUsuario('') === 'EL campo Salario Anual no puede estar vacio',
		'Validar input salario anual Usuario,  no valido que el campo sea vacio',
	);
	console.assert(
		validarInputSalarioAnualUsuario('sd'.repeat(10)) === 'El campo Salario Anual solo acepta numeros',
		'validar input salario anual usuario, no valido que el campo solo acepte numeros',
	);
	console.assert(
		validarInputSalarioAnualUsuario(1000000) === '',
		'validar salario anual usuario, fallo con un salario valido',
	);
}

probarValidarFunctionCalcularSalarioMensual();
probarValidarInputSalarioAnualUsuario();
