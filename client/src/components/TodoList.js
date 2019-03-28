import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Container, Button } from 'reactstrap';

class TodoList extends Component {
	render() {
		return (
			<Container>
				<ListGroup>
					{this.props.todos.map(todo => (
						<ListGroupItem key={todo._id}>
							{todo.task}{' '}
							<Button
								onClick={() => this.props.deleteTodo(todo._id)}
								color="danger"
								style={{ float: 'right' }}
							>
								&times;
							</Button>
							<Button
								onClick={() => this.props.editTodo(todo._id)}
								color="info"
								style={{ float: 'right', margin: '0 5px' }}
							>
								Edit
							</Button>
						</ListGroupItem>
					))}
				</ListGroup>
			</Container>
		);
	}
}

export default TodoList;
