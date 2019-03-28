const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

exports.getTodos = async (req, res) => {
	const todos = await Todo.find().sort({ date: -1 });
	res.json({ todos: todos });
};

exports.addTodo = async (req, res) => {
	const todo = await new Todo(req.body).save();
	res.json({ todo: todo });
};

exports.updateTodo = async (req, res) => {
	const todo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		runValidators: true
	}).exec();
	res.redirect('/');
};

exports.deleteTodo = async (req, res) => {
	await Todo.findOneAndDelete({ _id: req.params.id });
	res.json({ success: true });
};
