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

const $calcularSalarioMensualUsuario = document.querySelector('#calcular-salario-mensual-usuario');

$calcularSalarioMensualUsuario.onclick = function () {
	const salarioAnualUsuario = document.querySelector('#salario-anual-usuario').value;
	const salarioMensualUsuario = calcularSalarioMensual(salarioAnualUsuario);
	document.querySelector('#salario-mensual-usuario').value = salarioMensualUsuario;
};

document.querySelector('#borrar').onclick = function (event) {
	$formulario.reset();
	borrarErroresLi();
	const salarioAnualUsuario = document.querySelector('#salario-anual-usuario');
	salarioAnualUsuario.style.border = '';
	salarioAnualUsuario.style.backgroundColor = '';
};

function borrarErroresLi() {
	const $erroresLi = document.querySelectorAll('li');
	for (let i = 0; i < $erroresLi.length; i++) {
		$erroresLi[i].remove();
	}
}

let $formulario = document.querySelector('#formulario-calculadora-salario-mensual');

$formulario.addEventListener('submit', function (event) {
	event.preventDefault();
	borrarErroresLi();

	let errores = [];
	const salarioAnualUsuario = document.querySelector('#salario-anual-usuario').value;

	if (salarioAnualUsuario.length === 0) {
		errores.push('El campo salario anual no puede estar vació');
	}
	if (!/^[0-9]+$/.test(salarioAnualUsuario)) {
		errores.push('El campo Salario Anual solo acepta numeros');
	}

	if (errores.length > 0) {
		event.preventDefault();
		const salarioAnualUsuario = document.querySelector('#salario-anual-usuario');
		salarioAnualUsuario.style.border = 'solid 2px red';
		salarioAnualUsuario.style.backgroundColor = 'rgb(233,177,165)';
		let ulErrores = document.querySelector('.errores ul');
		errores.forEach((error) => {
			ulErrores.innerHTML += `<li>${error}</li>`;
		});
	} else {
		const salarioAnualUsuario = document.querySelector('#salario-anual-usuario');
		salarioAnualUsuario.style.border = 'solid 2px green';
		salarioAnualUsuario.style.backgroundColor = 'rgb(182,212,138)';
		let ulErrores = document.querySelector('.errores ul');
		errores.forEach((error) => {
			ulErrores.innerHTML += ``;
		});
	}
});
