#Untuk Build
FROM node:14-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN apk add --no-cache tzdata
ENV TZ Asia/Jakarta
RUN date

RUN npm run build

#Untuk Prod
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/nginx.config /etc/nginx/conf.d/default.conf
RUN apk add --no-cache tzdata
ENV TZ Asia/Jakarta
RUN date
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
