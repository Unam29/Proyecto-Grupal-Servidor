const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/baseDatos')
    .then(db => console.log(db.connection.host))
    .catch(err => console.error(err));

