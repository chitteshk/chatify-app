import express from 'express';

const router = express.Router(); // to bundle all the auth routes

router.get('/signup', (req,res) => {
    res.send('singup endpoint')
})

router.get('/login', (req,res) => {
    res.send('login endpoint')
})

router.get('/logout', (req,res) => {
    res.send('logout endpoint')
})

export default router;
