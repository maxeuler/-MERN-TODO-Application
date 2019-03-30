import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import EditModal from './components/EditModal';

class App extends Component {
	state = {
		todos: [],
		modal: false,
		todoEdit: ''
	};

	constructor(props) {
		super(props);
		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.updateTodo = this.updateTodo.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	componentDidMount() {
		axios
			.get('/api/todos')
			.then(res => {
				console.log(res.data);
				this.setState({ todos: [...this.state.todos, ...res.data.todos] });
			})
			.catch(err => console.log(err));
	}

	addTodo = task => {
		axios
			.post('/api/todos', { task })
			.then(res =>
				this.setState({ todos: [res.data.todo, ...this.state.todos] })
			)
			.catch(err => console.log(err));
	};

	deleteTodo = id => {
		axios
			.delete(`/api/todos/${id}`)
			.then(res =>
				this.setState({
					todos: [...this.state.todos.filter(todo => todo._id !== id)]
				})
			)
			.catch(err => console.log(err));
	};

	updateTodo = (task, id) => {
		console.log(task);
		axios.post(`/api/todos/${this.state.todoEdit._id}`, { task }).then(res =>
			this.setState({
				modal: !this.state.modal,
				todos: this.state.todos.map(todo => {
					console.log(res.data);
					if (todo._id === id) todo.task = res.data.todo.task;
					return todo;
				})
			})
		);
	};

	toggle = id => {
		console.log(id);
		const todo = this.state.todos.filter(todo => todo._id === id);
		console.log(todo);
		this.setState({ todoEdit: todo[0], modal: !this.state.modal });
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Container>
					<EditModal
						toggle={this.toggle}
						modal={this.state.modal}
						todo={this.state.todoEdit}
						update={this.updateTodo}
					/>
					<TodoInput addTodo={this.addTodo} />
				</Container>
				<br />
				<TodoList
					todos={this.state.todos}
					deleteTodo={this.deleteTodo}
					editTodo={this.toggle}
				/>
			</div>
		);
	}
}

export default App;
