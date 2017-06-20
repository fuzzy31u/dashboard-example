FROM node:8.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm i typescript -g && npm i

EXPOSE 3000

COPY server/app.ts /usr/src/app
RUN ["tsc", "/usr/src/app/app.ts"]
CMD ["node", "/usr/src/app/app"]