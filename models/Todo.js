const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
	task: {
		type: String,
		trim: true,
		required: 'You have to define a task for yout todo.'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = new mongoose.model('Todo', todoSchema);
