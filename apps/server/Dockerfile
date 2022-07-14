FROM node:16 as build

WORKDIR /usr/src/app

COPY . .

FROM node:alpine as main

COPY --from=build /usr/src/app /

ENV PORT=3020
ENV UI_ORIGIN=https://bttv-scraper.angelin.dev

EXPOSE 3020

CMD ["node", "main.js"]
