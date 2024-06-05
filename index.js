const express = require('express');
const line = require('@line/bot-sdk');
require('dotenv').config({path:'./.env'})
const serveStatic = require('serve-static')
const bodyParser = require("body-parser")

const app = express();

app.use('/liff',serveStatic(__dirname + '/liff'))

app.get('/', (req, res) => {
    res.send(process.env.CONTACT);
})

// Line WebHook =====
// BOT#1
const bot_handler = require('./handler/bot');
app.post('/bot', line.middleware(bot_handler.config), bot_handler.webhook);
// ==================

// server *****************************//<-- after line.middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// ************************************
// 
// BOT#1
app.post('/register', require('./handler/bot/action'))

//=== app started ==
console.log('LineBOT Server Started at port ' + process.env.PORT)
app.listen(process.env.PORT || 4123);  