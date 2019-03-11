import express from 'express';
import jwt from 'express-jwt';
import cors from 'cors';
import jwks from 'jwks-rsa';
import jwtAuthz from 'express-jwt-authz';
const fs = require('fs');
const busboy = require('connect-busboy');
var path = require('path');


const app = express();
app.use(cors());

app.use(busboy());
app.use(express.static(path.join(__dirname, '../client/src/components/assets/files/')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, X-Auth-Token");
    next();
});

app.post('/upload', function(req, res) {
    var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {
        console.log("Uploading: " + filename); 
        fstream = fs.createWriteStream('../client/src/components/assets/files/' + filename);
        file.pipe(fstream);
        fstream.on('close', function () {
            res.send(filename);
        });
    });
});

const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://d4ni.eu.auth0.com/.well-known/jwks.json"
    }),
    audience: 'http://writeup',
    issuer: "https://d4ni.eu.auth0.com/",
    algorithms: ['RS256']
});

const checkScopes = jwtAuthz (['read:upload']);

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
  
    // render the error page
    res.status(err.status || 500)
    res.render('error')
  })

app.listen(5000, () => {
    console.log('Servidor Funcionando');
})