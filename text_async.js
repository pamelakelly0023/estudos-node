const fs = require('fs');

for (let i = 1; i <= 5; i++) {
	const file = `async-txt${i}.txt`;
	const out = fs.writeFile(file, 'Hello Node.js!', (err, out) => {
		console.log(out);
	});
	
}
// Timeline assíncrona não bloqueante = 200 milissegundos