function promedio(arr) {
	const total = arr.reduce((prev, curr) => prev + curr, 0);
	return total / arr.length;
}

console.log(promedio([1, 2, 3, 4]));
// output: 2.5
