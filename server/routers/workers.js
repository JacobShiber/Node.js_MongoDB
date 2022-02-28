const workersRouter = require('express').Router();

const actions = require('../controllers/workers-cntrlr');

workersRouter.get('/', actions.getWorkers);

workersRouter.get('/:id', actions.getWorker);

workersRouter.post('/', actions.addWorker);

workersRouter.put('/:id', actions.editWorker);

workersRouter.delete('/:id', actions.deleteWorker);

module.exports = workersRouter;