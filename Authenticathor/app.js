const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req , res) => {
    res.json({
        mensaje: "Nodejs and JWT"
    });
});

app.post("/api/login", (req , res) => {
    const user = {
        id: 1,
        nombre : "Henry",
        email: "henry@email.com"
    }

    jwt.sign({user}, 'secretkey', {expiresIn: '32s'}, (err, token) => {
        res.json({
            token
        });
    });
/**eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Iml
 * kIjoxLCJub21icmUiOiJIZW5yeSIsImVtYWlsIjoiaGVucnlAZW1haWwuY29tIn0sImlhdC
 * I6MTY0Nzk0NzA2OCwiZXhwIjoxNjQ3OTQ3MTAwfQ.REdWa-4jTfzWjHd_r1Vfe6FQ2LKgF
 * MtNAi8bP9cArF4" */
});

app.post("/api/posts", verifyToken, (req , res) => {

    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                    mensaje: "Post fue creado",
                    authData
                });
        }
    });
});

// Authorization: Bearer <token>
function verifyToken(req, res, next){
     const bearerHeader =  req.headers['authorization'];

     if(typeof bearerHeader !== 'undefined'){
          const bearerToken = bearerHeader.split(" ")[1];
          req.token  = bearerToken;
          next();
     }else{
         res.sendStatus(403);
     }
}

app.listen(3000, () => {
    console.log("nodejs app running...");
});
