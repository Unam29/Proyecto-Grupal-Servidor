

async function enviarEmail(req,res) {
    var transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        post: 8080,
        secure: false,
        auth:{
            user: "maximillian.torphy93@ethereal.email", /** el usuario y pass generado por Ethereal Email */
            pass:  "JBhtefHZ7YdNwTBz15",
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
};


module.exports = { enviarEmail };