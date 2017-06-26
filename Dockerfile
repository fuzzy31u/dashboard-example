FROM node:8.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY server/package.json server/package-lock.json /usr/src/app/
RUN npm i typescript -g && npm i

COPY server/dist /usr/src/app

EXPOSE 3000

COPY server/app.ts /usr/src/app
RUN ["tsc", "/usr/src/app/app.ts"]
CMD ["node", "/usr/src/app/app"]