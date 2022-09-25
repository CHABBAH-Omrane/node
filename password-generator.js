var generator = require('generate-password');

var password = generator.generate({
	length: 8,
	numbers: false
});

// 'uEyMTw32v9'
console.log(password);