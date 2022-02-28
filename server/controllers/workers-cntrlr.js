const getWorkers = (req, res) => {
    res.send('workers');
}

const getWorker = (req, res) => {
    res.send('worker');
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

module.exports = {getWorkers, getWorker, addWorker, editWorker, deleteWorker };