FROM node:12.13-alpine AS builder
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn run build
COPY . .

FROM nginx:alpine AS serve
WORKDIR /usr/src/app
ENV NODE_ENV production
COPY --from=builder /usr/src/app/dist /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]