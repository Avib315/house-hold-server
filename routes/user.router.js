const express = require('express');
const router = express.Router();
const userService = require('../BL/user.service.js');
const { auth, loginAuth } = require('../middleware/auth.js');

router.post('/login', async (req, res) => {
    try {
        const userInput = {
            email: req.body?.email,
            password: req.body?.password
        };

        const { result, token } = await userService.login(userInput);

        if (token) {
            res.cookie('token', token, { httpOnly: true, secure: true, sameSite: "None" });
        }

        res.status(200).send(result);
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).send({ login: false, message: 'Something went wrong' });
    }
});

router.post('/register', async (req, res) => {
    try {
        const userInput = {
            name: `${req.body?.fName.trim()} ${req.body?.lName.trim()}`,
            email: req.body?.email,
            password: req.body?.password,
            avatar: req.body?.avatar
        };

        const result = await userService.register(userInput);
        res.status(200).send(result);
    } catch (error) {
        console.error('Register Error:', error);
        res.status(500).send({ registered: false, message: 'Something went wrong' });
    }
});
router.get('/get-user-data', auth, async (req, res) => {
    try {
        const userId = req.body.userId
        const result = await userService.getUser(userId);
        res.status(200).send(result);
    } catch (error) {
        console.error('Register Error:', error);
        res.status(500).send({ registered: false, message: 'Something went wrong' });
    }
});

router.get('/isAuthenticated', auth, async (req, res) => {
    try {
        res.status(200).send(true);
    } catch (error) {
        res.status(500).send({ isAuthenticated: false, message: 'Something went wrong' });
    }
});

module.exports = router;
