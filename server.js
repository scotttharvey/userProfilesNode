var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var cors = require("cors");
var config = require("./config.js")
var app = express();
var userCtrl = require("./controllers/userCtrl.js")
var profileCtrl = require("./controllers/profileCtrl.js")

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(session({
    secret: config.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}));
app.use(cors(corsOptions));

var port = 9000;
var corsOptions = {
    origin: 'http://localhost:9000'
};
app.use(express.static(__dirname + '/public'))

 app.post('/api/login', userCtrl.login);
 app.get('/api/profiles', profileCtrl.getFriends);

app.listen(port, function() {
    console.log('listenin to', port);
})
