import React, { Component } from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input
} from 'reactstrap';

class EditModal extends Component {
	state = {
		id: '',
		task: ''
	};

	componentDidUpdate(prevProps) {
		if (this.props.todo && this.props.todo !== prevProps.todo) {
			this.setState({ task: this.props.todo.task, id: this.props.todo._id });
		}
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div>
				<Modal isOpen={this.props.modal} toggle={this.props.toggle}>
					<ModalHeader toggle={this.props.toggle}>Edit</ModalHeader>
					<ModalBody>
						<Input
							name="task"
							type="text"
							value={this.state.task}
							onChange={this.onChange}
						/>
					</ModalBody>
					<ModalFooter>
						<Button
							color="primary"
							onClick={() => this.props.update(this.state.task, this.state.id)}
						>
							Save
						</Button>
						<Button color="secondary" onClick={this.props.toggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

export default EditModal;
