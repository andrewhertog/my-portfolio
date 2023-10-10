FROM node:18

WORKDIR /home/app

COPY package.json .

RUN npm install -g pnpm

RUN pnpm install

COPY . . 