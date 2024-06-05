# linebot-docker
 
### Installation
- Prerequisite
    - Install Git
    - Install ngrok
    - Install docker
    - Install vscode and docker plugin
    - Create LINE BOT and LINE Login

- Download
```
    git clone https://github.com/kongdej/linebot-docker
```

- Run ngrok 
```
    ngrok http 8000
```

- Update ngrok url to LINE Message API
```
    Webhook URL: https://d8da-61-7-151-115.ngrok-free.app/bot
```

- Update ngrok url to LINE Login (LIFF)
```
    Endpoint URL: https://d8da-61-7-151-115.ngrok-free.app/liff
```

- Update .env
```
    HOST = https://d8da-61-7-151-115.ngrok-free.app
    PORT = 8000

    BOT_ACCESS_TOKEN = xxxxxxxxxxxxxxxxxxxxxxxxx
    BOT_SECRET = xxxxxxxxx
```   

- Run docker compose
```
   docker compose up
```

- Update liff/index.html
```
    const liffId = '1654109634-mOJGk7bV' // Replace with your LIFF ID
    const serverUrl = 'https://d8da-61-7-151-115.ngrok-free.app/register'

```