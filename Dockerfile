FROM node:alpine

WORKDIR /app

COPY ./client/package.json .
RUN yarn
COPY ./client .

CMD ["yarn", "start"]