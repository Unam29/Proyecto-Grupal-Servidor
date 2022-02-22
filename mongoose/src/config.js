require('dotenv').config();

const port = 3000;

const dbUrl = "mongodb+srv://Admin:Admin@cluster0.mixph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = {
    port,
    dbUrl
}