function fizzBuzz() {
	for (var i = 0; i <= 100; i++) {
		var mensaje = '';

		if (i % 3 === 0) {
			mensaje += 'Fizz';
		}
		if (i % 5 === 0) {
			mensaje += 'Buzz';
		}
		console.log(mensaje || i);
	}
}
fizzBuzz();
