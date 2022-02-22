const mongoose = require('mongoose');
const {dbUrl} = require('../config')
mongoose.connect(dbUrl)
    .then(db => console.log(db.connection.host))
    .catch(err => console.error(err));

