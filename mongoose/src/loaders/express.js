const express = require('express');


const router = require(__dirname+'');

module.exports = (server) => {  
    server.use(router);
    server.use((req, res) => res.status(404).send({ message: 'Not Found' }));
};