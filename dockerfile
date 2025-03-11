
FROM node:22.14.0


WORKDIR /app


COPY package*.json ./


RUN npm install

COPY . .


EXPOSE 4000


CMD ["npm", "run", "dev"]
