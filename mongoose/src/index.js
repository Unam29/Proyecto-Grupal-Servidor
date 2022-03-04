const routes = require('./routes')
const engine = require('ejs-mate')
const express = require("express")
const mongoose = require("mongoose") // new
const { dbUrl } = require("./config")
const path = require('path')
const morgan = require('morgan')

// Connect to MongoDB database
mongoose
	.connect(dbUrl)
	.then(() => {
		//Config
		const app = express();
		app.set('views', path.join(__dirname, 'views'));
		app.engine('ejs', engine);
		app.set('view engine', 'ejs')
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));
        app.use("/tiendaMangas",routes);

		

		//Middlewares
		app.use(morgan('dev'));
		app.use(express.urlencoded({entended: false}));

		// Rutas
		app.use('/', require('./routes/index'))

		//Css
		app.use(express.static('public'));

		//Iniciar Server
		app.listen(3000, () => {
			console.log("Server has started!")
		})
	})