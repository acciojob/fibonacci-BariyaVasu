function fibonacci(num) {
 // [0 0 1 2 3]
	if(num <= 0) return 0;
	if(num == 1) return 1;
	
	return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10));

module.exports = fibonacci;
