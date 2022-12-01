function calcularSalarioAnual(salarioMensual) {
	const MESES_EN_EL_ANIO = 12;
	return salarioMensual * MESES_EN_EL_ANIO;
}
function validarSalarioMensual(salarioMensual) {
	if (salarioMensual.length === 0) {
		return 'El campo Salario Mensual no puede estar vacio';
	}
	if (!/^[0-9]+$/.test(salarioMensual)) {
		return 'El campo Salario Mensual solo acepta numeros';
	}
	return '';
}

const $calcularSalarioAnual = document.querySelector('#calcular-salario-anual-usuario');
$calcularSalarioAnual.onclick = function (event) {
	event.preventDefault();
	borrarErroresLi();

	const salarioMensualUsuario = Number(document.querySelector('#salario-mensual-usuario').value);

	const salarioAnual = calcularSalarioAnual(salarioMensualUsuario);

	document.querySelector('#salario-anual-usuario').value = salarioAnual;
};

document.querySelector('#reset').onclick = function (event) {
	$form.reset();
	borrarErroresLi();
};

function validarFormulario(event){
	event.preventDefault();
	 borrarErroresLi();
	const $form = document.querySelector('#calculadora-salario-anual');
	console.log($form);

	const salarioMensualUsuario = $form['salario-mensual-usuario'].value;
	console.log(salarioMensualUsuario);

	const errorSalarioMensualUsuario = validarSalarioMensual(salarioMensualUsuario);
	console.log(errorSalarioMensualUsuario);

	const errores = {
		salarioMensualUsuario: errorSalarioMensualUsuario,
	};
	console.log(errores);

	const esExito = manejarerrores(errores) === 0;
	if(esExito){
		$form.className = 'oculto';
		document.querySelector('#exito').className = '';
	}

}

function borrarErroresLi() {
	const $erroresLi = document.querySelectorAll('li');
	for (let i = 0; i < $erroresLi.length; i++) {
		$erroresLi[i].remove();
	}
}

function manejarerrores(errores){
	const keys = Object.keys(errores);
	console.log(keys);
	const $errores = document.querySelector('#errores');
	console.log($errores);

	keys.forEach(function (key){
		const error = errores[key];
		console.log(error);

		if(error){
			$form[key].className = 'error';

			const $error = document.createElement('li');
			console.log($error);
			$error.innerText = error;
			$errores.appendChild($error);
		}else{
			$form[key].className = 'exito';
		}

	});
}



const $form = document.querySelector('#calculadora-salario-anual');
$form.onclick = validarFormulario;