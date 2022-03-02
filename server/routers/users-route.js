const usersRoute = require('express').Router();
const {register, login} = require('../controllers/users-ctrl');

usersRoute.post('/register', register);
usersRoute.post('/login', login);

module.exports = usersRoute;
