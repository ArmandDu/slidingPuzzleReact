FROM node:8

RUN	mkdir /app
WORKDIR /app
RUN	npm i -g serve

ADD	build/ /app

EXPOSE	5000

CMD  ["serve", "-s", "/app"]
