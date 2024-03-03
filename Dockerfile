# Utilizar una imagen de Node.js como base
FROM node:20-alpine

WORKDIR /app

ARG NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY=d93e1bbcb87728eb04731b0f0d506d54
ARG NEXT_PUBLIC_MARVEL_PUBLIC_API_URL=https://gateway.marvel.com/v1/public

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --pure-lockfile

COPY next.config.mjs ./
COPY tsconfig.json ./
COPY src src
COPY public public

RUN yarn run build


EXPOSE $PORT

CMD ["yarn", "start"]
