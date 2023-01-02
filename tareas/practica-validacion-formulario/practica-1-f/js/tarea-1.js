function calcularSalarioMensual(salarioAnualUsuario) {
	const mesesEnElAnio = 12;
	return salarioAnualUsuario / mesesEnElAnio;
}

function validarInputSalarioAnualUsuario(salarioAnualUsuario) {
	if (salarioAnualUsuario.length === 0) {
		return 'EL campo Salario Anual no puede estar vacio';
	}
	if (!/^[0-9]+$/.test(salarioAnualUsuario)) {
		return 'El campo Salario Anual solo acepta numeros';
	}
	return '';
}

function validarFormulario(event) {
	event.preventDefault();
	borrarErroresLi();
	const $formulario = document.querySelector('#formulario-calculadora-salario-mensual');

	const inputSalarioAnualUsuario = $formulario['salario-anual-usuario'].value;

	const errorInputSalarioanualUsuario = validarInputSalarioAnualUsuario(inputSalarioAnualUsuario);

	const errores = {
		'salario-anual-usuario': errorInputSalarioanualUsuario,
	};

	const esExito = manejarErrores(errores) === 0;
	if (esExito) {
		const salarioAnualUsuario = document.querySelector('#salario-anual-usuario');
		salarioAnualUsuario.style.border = 'solid 2px green';
		salarioAnualUsuario.style.backgroundColor = 'rgb(182,212,138)';
		const $mensajeFormulario = document.querySelector('#formulario-no-enviado');
		$mensajeFormulario.style.display = 'none';

		const $mensajeFormularioEnviado = document.querySelector('#formulario-enviado');
		$mensajeFormularioEnviado.style.display = 'flex';
	}

	document.querySelector('#borrar').onclick = function (event) {
		$formulario.reset();
		borrarErroresLi();
		const salarioAnualUsuario = document.querySelector('#salario-anual-usuario');
		salarioAnualUsuario.style.border = '';
		salarioAnualUsuario.style.backgroundColor = '';

		const $mensajeFormularioNoEnviado = document.querySelector('#formulario-no-enviado');
		$mensajeFormularioNoEnviado.style.display = 'none';

		const $mensajeFormularioEnviado = document.querySelector('#formulario-enviado');
		$mensajeFormularioEnviado.style.display = 'none';
	};

	function borrarErroresLi() {
		const $erroresLi = document.querySelectorAll('li');
		for (let i = 0; i < $erroresLi.length; i++) {
			$erroresLi[i].remove();
		}
	}

	function manejarErrores(errores) {
		const keys = Object.keys(errores);
		const $errores = document.querySelector('.errores');

		let cantidadErrores = 0;

		keys.forEach(function (key) {
			const error = errores[key];

			if (error) {
				cantidadErrores++;
				const salarioAnualUsuario = document.querySelector('#salario-anual-usuario');
				salarioAnualUsuario.style.border = 'solid 2px red';
				salarioAnualUsuario.style.backgroundColor = 'rgb(233,177,165)';

				const $mensajeFormulario = document.querySelector('#formulario-enviado');
				$mensajeFormulario.style.display = 'none';
				const $mensajeFormularioNoEnviado = document.querySelector('#formulario-no-enviado');
				$mensajeFormularioNoEnviado.style.display = 'flex';

				const $error = document.createElement('li');
				$error.innerText = error;
				$errores.appendChild($error);
			}
		});
		return cantidadErrores;
	}
}

const $formulario = document.querySelector('#formulario-calculadora-salario-mensual');
$formulario.onsubmit = validarFormulario;

const $calcularSalarioMensualUsuario = document.querySelector('#calcular-salario-mensual-usuario');

$calcularSalarioMensualUsuario.onclick = function () {
	const salarioAnualUsuario = document.querySelector('#salario-anual-usuario').value;
	const salarioMensualUsuario = calcularSalarioMensual(salarioAnualUsuario);
	document.querySelector('#salario-mensual-usuario').value = salarioMensualUsuario;
};
