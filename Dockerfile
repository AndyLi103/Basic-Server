FROM node:12

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8081

EXPOSE 8081

CMD ["npm", "start"]

