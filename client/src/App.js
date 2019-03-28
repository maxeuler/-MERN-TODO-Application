import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import EditModal from './components/EditModal';

class App extends Component {
	state = {
		todos: [],
		modal: false
	};

	constructor(props) {
		super(props);
		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
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
		console.log('add' + task);
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

	toggle = id => {
		console.log(id);
		this.setState({ modal: !this.state.modal });
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Container>
					<EditModal toggle={this.toggle} modal={this.state.modal} />
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
