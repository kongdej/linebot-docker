const line = require("@line/bot-sdk")
const crypto = require('crypto')

// create LINE SDK config from env variables
const config = {
    channelSecret: process.env.BOT_SECRET,
};
  
// create LINE SDK client
const client = new line.messagingApi.MessagingApiClient({
    channelAccessToken: process.env.BOT_ACCESS_TOKEN
});

const replyMsg = async (event, msg) => {
    return new Promise(function (resolve, reject) {
        client.replyMessage({
            replyToken: event.replyToken, 
            messages: [{ type: 'text', text: msg }]
        })
        resolve()
    });
}


// =========================================================
function handleEvent(event) {
    // ignore non-text-message event
    if (event.type !== 'message' || event.message.type !== 'text') {
      return Promise.resolve(null);
    }
  
    // use reply API
    if (event.message.type == 'text') {
        replyMsg(event,event.message.text)
    }
}

const webhook = async(req, res) => {
    // check x-line-signature
    const text = JSON.stringify(req.body);
    const signature = crypto.createHmac('SHA256', config.channelSecret ).update(text).digest('base64').toString();
    if (signature !== req.headers['x-line-signature']) {
        return res.status(401).send('Unauthorized');
    }
   
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result))
        .catch((err) => {
        console.error(err);
        res.status(500).end();
        });
}
  
module.exports = {
    config,
    webhook
}