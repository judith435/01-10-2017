function factorial(x) {
    if (x === 0)
		return 1;
	let temp = 1;	
	for(let i=1; i <= x; i++)
		temp *= i;
	return temp;
}

function factorial_recursive(x) {
	if (x === 0)
		return 1;
	return x * factorial_recursive(x-1);
}

function power(x, pow) {
	let temp = x;
	for(let i=2; i <= pow; i++)
		temp = temp * x;
    return temp;
}

function power_recursive(x, pow) {
    // TODO
}