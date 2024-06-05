FROM node:21

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

RUN npm install -g nodemon

COPY ./ ./

CMD [ "nodemon","index.js" ]

