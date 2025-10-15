import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router(); // to bundle all the auth routes

router.post('/signup', signup)

router.get('/login', (req,res) => {
    res.send('login endpoint')
})

router.get('/logout', (req,res) => {
    res.send('logout endpoint')
})

export default router;
