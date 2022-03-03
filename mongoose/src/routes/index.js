const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
    res.render('register');
});

router.get('/register', (req, res, next)=>{
    res.render('register');
});

router.post('/register', (req, res, next)=>{
    console.log(req.body);
    res.send('Datos de Registro Enviados al Servidor');
});

router.get('/login', (req, res, next)=>{
    res.render('login');
});

router.post('/login', (req, res, next)=>{
    res.render('login');
});

module.exports = router;