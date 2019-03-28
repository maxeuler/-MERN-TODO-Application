const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');
const controller = require('../controller/todoController');
const { catchErrors } = require('../errorHandlers');

router.get('/', catchErrors(controller.getTodos));

router.post('/', catchErrors(controller.addTodo));

router.post('/:id', catchErrors(controller.updateTodo));

router.delete('/:id', catchErrors(controller.deleteTodo));

module.exports = router;
