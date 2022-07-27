const express = require('express');

const PORT = 3003;
const HOST = 'localhost';

const app = express();

app.get('/', (req, res) => {
	console.log(req.url);
	res.send('<h1>Test page</h1>');
});

app.listen(PORT, HOST, () => {
	console.log('Server working...');
});