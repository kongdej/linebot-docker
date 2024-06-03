const express = require('express');
const line = require('@line/bot-sdk');
require('dotenv').config({path:'./.env'})

const app = express();

app.get('/', (req, res) => {
    res.send(process.env.CONTACT);
})

// Line BOT#1
const bot_handler = require('./handler/bot');
app.post('/bot', line.middleware(bot_handler.config), bot_handler.webhook);

//=== app started ==
console.log('Webhook started at port ' + process.env.PORT)
app.listen(process.env.PORT || 4123);  