FROM node:10-alpine

ENV NODE_ENV production
ENV PORT 8080

EXPOSE 8080

WORKDIR /app
COPY . .

CMD [ "node", "server.js" ]