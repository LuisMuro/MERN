const express = require('express');
const morgan = require('morgan'); // morgan es para escuchar u obtener datos del cliente
const path = require('path');

const { mongoose } = require('./database'); //Conexión a la base de datos

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/task.routes')) // Se pueden agregar prefijos

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Starting server
app.listen(app.get('port'), () => {
	console.log(`server on port ${app.get('port')}`);
});