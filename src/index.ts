function benchmark(args: any[]) {
	console.log('Testing', args);
}

const { argv } = require('node:process');
benchmark(argv);
