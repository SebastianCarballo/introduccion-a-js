function probarValidarFuncionCalcularSalarioAnual() {
	console.assert(
		calcularSalarioAnualUsuario(1, 12) === 12,
		'El calculo de la funcion calcularSalarioAnualUsuario no dio 1',
	);
}

function probarValidarSalarioMensuallUsuario() {
	console.assert(
		validarSalarioMensualUsuario('') === 'El campo Salario Mensual no puede estar vacio',
		'validar salario mensual usuario no valido que el campo sea vacio',
	);

	console.assert(
		validarSalarioMensualUsuario('askdlnhafhowqiwoqrwqhdbio') === 'El campo Salario Mensual solo acepta numeros',
		'validar salario mensual usuario no valido que el campo solo acepte numeros',
	);
	console.assert(
		validarSalarioMensualUsuario('10000000') === '',
		'validar salario mensual usuario fallo con un salario valido',
	);
}

probarValidarFuncionCalcularSalarioAnual();
probarValidarSalarioMensuallUsuario();
