const nodemailer = require('nodemailer');
const express = require('express');
const app = express();

app.post('/send-email', (req,res) => {
    var transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        post: 8080,
        secure: false,
        auth:{
            user: "aurelie.barton43@ethereal.email", /** el usuario y pass generado por Ethereal Email */
            pass:  "wYdfj5G71T83cvtMxz",
        },
    });

    var mailOptions = {
        from: "Remitente",
        to: "juanma97sevillano@gmail.com",
        subject: "Enviado desde asljdhasldjhasjldkhas",
        text: "Esto es un texto enviado PRUEBA 3"
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            res.status(500).send(err.message);
        }
        else{
            console.log("Email ha sido enviado!!! :DDD");
            res.status(200).json(req.body);
        }
    })
    console.log('Email enviado');
});

app.listen(3000, () => {
    console.log('Servidor en -> http://localhost:3000');
});
