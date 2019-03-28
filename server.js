const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/routes');
const { notFoundError } = require('./errorHandlers');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/todos', routes);
app.use(notFoundError);

require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
	console.error(`🙅‍ 🚫 🙅‍ 🚫 🙅‍ 🚫 🙅‍ 👉 ${err.message}`);
});

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
	console.log(`Express running -> PORT ${server.address().port}`);
});
