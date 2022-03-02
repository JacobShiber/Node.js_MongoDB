const users = require('../models/user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
module.exports = {
    register: async (req, res) => {
        if (users.exists(req.body.email) == true) return res.status(500).send({ massage: 'email already in use' });
        bcrypt.hash(req.body.password, 10, async (err, hashPassword) => {
            if (err) return res.status(500).send({ massage: 'error' })
            req.body.password = hashPassword
            await users.create(req.body)
                .then(result => res.status(200).send({ success: true, result: result }))
                .catch(err => res.status(500).send(err));
        })
    },

    login: async (req, res) => {
        if (users.exists(req.body.email) == false) return res.status(500).send({ massage: 'user not found' });
        const { email, password } = req.body;
        await users.findOne({ email })
            .then(user => {
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) return res.status(500).send({ massage: 'Error in finding' });
                    if (!isMatch) return res.status(403).send({ massage: 'password do not match' });
                    jwt.sign({ ...user }, process.env.SECRET_KEY, { expiresIn: '30m' }, (err, token) => {
                        if (err) return res.status(500).send({ massage: 'Error in token' });
                        res.status(200).send({ massage: 'Login successful', token });
                    })
                })
            })
            .catch(err => res.status(500).send({ massage: 'Error' }));
    }
}