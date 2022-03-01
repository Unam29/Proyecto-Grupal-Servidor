
const routes = require('./routes')
const express = require("express")
const mongoose = require("mongoose") // new
const { dbUrl } = require("./config")



// Connect to MongoDB database
mongoose
	.connect(dbUrl)
	.then(() => {
		const app = express()
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));
        app.use("/tiendaMangas",routes);



		app.listen(3000, () => {
			console.log("Server has started!")
		})
	})