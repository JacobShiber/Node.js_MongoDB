const workers = require('../models/worker-model');

const getWorkers = async (req, res) => {
    await workers.find()
        .then(result => res.send(result))
        .catch(err => res.status(404).send({ message: err }));
}

const getWorker = async (req, res) => {
    await workers.findById(req.params.id)
        .then(result => res.send(result))
        .catch(err => res.status(404).send({ message: err }));
}

const addWorker = async (req, res) => {
    await workers.create(req.body)
    .then(result => res.send(result))
    .catch(err => res.status(404).send({ message: err }));
}

const editWorker = async (req, res) => {
    await workers.findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.send(result))
    .catch(err => res.status(404).send({ message: err}));
}

const deleteWorker = async(req, res) => {
    await workers.findByIdAndDelete(req.params.id)
    .then(result => res.send(result))
    .catch(err => res.status(404).send({ message: err }));
}

module.exports = { getWorkers, getWorker, addWorker, editWorker, deleteWorker };