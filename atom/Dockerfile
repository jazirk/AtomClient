FROM node:12.18.4 as build
WORKDIR /web
RUN npm install -g @angular/cli

RUN npm cache clean -f

COPY package.json package.json
RUN npm install;
COPY . .
RUN ng build --prod

FROM nginx:1.17.6-alpine

COPY --from=build /web/dist/atom /usr/share/nginx/html
