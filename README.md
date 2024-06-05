# linebot-docker
 
### Installation
- Prerequisite
    - Install Git
    - Create LINE BOT and LINE Login
    - Install ngrok

- Download
```
    git clone https://github.com/kongdej/linebot-docker
```

- Update .env
```
    HOST =  https://9086-1-46-203-66.ngrok-free.app
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