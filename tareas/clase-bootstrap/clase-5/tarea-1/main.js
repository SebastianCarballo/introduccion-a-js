function calcularSalarioAnualUsuario(salarioMensual) {
	const MESES_EN_EL_ANIO = 12;
	return salarioMensual * MESES_EN_EL_ANIO;
}

function validarSalarioMensualUsuario(salarioMensual) {
	if (salarioMensual.length === 0) {
		return 'El campo Salario Mensual no puede estar vacio';
	}
	if (!/^[0-9]+$/.test(salarioMensual)) {
		return 'El campo Salario Mensual solo acepta numeros';
	}
	return '';
}
function borrarMensajeFormularioBorrado() {
	const $mensajeFormularioBorrado = document.querySelectorAll('.mensaje');
	setTimeout(() => {
		for (let i = 0; i < $mensajeFormularioBorrado.length; i++) $mensajeFormularioBorrado[i].remove();
	}, 2000);
}

function manejarErrores(errores) {
	const keys = Object.keys(errores);
	const $errores = document.querySelector('#errores');

	keys.forEach(function (key) {
		const error = errores[key];

		if (error) {
			$form[key].className = 'error';

			const $error = document.createElement('li');
			$error.innerText = error;
			$errores.appendChild($error);
		} else {
			$form[key].className = 'exito';
		}
	});
}
const $form = document.querySelector('#calculadora-salario-anual');
console.log($form);

const $calcularSalarioAnualUsuario = document.querySelector('#calcular-salario-anual-usuario');
console.log($calcularSalarioAnualUsuario);
function validarFormulario(event) {
	event.preventDefault();
	const $form = document.querySelector('#calculadora-salario-anual');
	console.log($form);

	const salarioMensualUsuario = $form['salario-mensual-usuario'].value;
	console.log(salarioMensualUsuario);
	const errorSalarioMensualUsuario = validarSalarioMensualUsuario(salarioMensualUsuario);
	console.log(errorSalarioMensualUsuario);

	const errores = {
		salarioMensualUsuario: errorSalarioMensualUsuario,
	};

	const esExito = manejarErrores(errores) === 0;
	if (esExito) {
		$form.className = 'oculto';
		document.querySelector('#exito').className = '';
	}
}
$calcularSalarioAnualUsuario.onclick = function (event) {
	console.log('Me hiciste click');
	event.preventDefault();
	//borrarErroresLi();
	const salarioMensual = document.querySelector('#salario-mensual-usuario').value;
	console.log(salarioMensual);
	const salarioAnual = calcularSalarioAnualUsuario(salarioMensual);
	console.log(salarioAnual);
	document.querySelector('#salario-anual-usuario').value = salarioAnual;
};

document.querySelector('#reset').onclick = function (event) {
	event.preventDefault();
	const contenedor = document.querySelector('#mensaje');
	console.log(contenedor);
	const parrafo = document.createElement('p');
	parrafo.className = 'mensaje';
	console.log(parrafo);
	parrafo.textContent = 'El formulario se ha borrado con exito';
	document.body.appendChild(parrafo);
	$form.reset();
	borrarMensajeFormularioBorrado();
};

$form.onclick = validarFormulario;
