# Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3333

# Default to test if not specified
ENV NODE_ENV=test

# 修改這行，改用 shell 形式
CMD npm run start:$NODE_ENV