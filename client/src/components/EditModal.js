import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditModal = props => (
	<div>
		<Modal isOpen={props.modal} toggle={props.toggle}>
			<ModalHeader toggle={props.toggle}>Edit</ModalHeader>
			<ModalBody>test</ModalBody>
			<ModalFooter>
				<Button color="primary" onClick={props.toggle}>
					Save
				</Button>
				<Button color="secondary" onClick={props.toggle}>
					Cancel
				</Button>
			</ModalFooter>
		</Modal>
	</div>
);

export default EditModal;
