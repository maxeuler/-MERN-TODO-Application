import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class TodoInput extends Component {
	state = {
		task: ''
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state.task);
		this.setState({ task: '' });
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<Form onSubmit={this.onSubmit}>
				<FormGroup>
					<Label for="task">New Todo</Label>
					<Input
						type="text"
						name="task"
						id="task"
						placeholder="A new Task..."
						onChange={this.onChange}
						value={this.state.task}
					/>
				</FormGroup>
				<Button>ADD</Button>
			</Form>
		);
	}
}

export default TodoInput;
