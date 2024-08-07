FROM node:20-alpine

RUN apk add --no-cache php

WORKDIR /app

COPY . .

RUN mkdir /srv/input
RUN mkdir /srv/output

RUN npm install gulp -g
RUN npm install

CMD [ "gulp" ]

EXPOSE 3000
EXPOSE 3001
