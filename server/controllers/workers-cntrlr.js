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

const addWorker = (req, res) => {
    res.send('worker added');
}

const editWorker = (req, res) => {
    res.send('worker edit');
}

const deleteWorker = (req, res) => {
    res.send('worker deleted');
}

module.exports = { getWorkers, getWorker, addWorker, editWorker, deleteWorker };