FROM node:12-alpine as builder
RUN apk add --update \
  git \
  openssh-client

WORKDIR /usr/src/app/
USER root
COPY package.json ./
RUN npm install
COPY ./ ./

RUN npm run build

FROM nginx

WORKDIR /usr/share/nginx/html/

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/build  /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


# WORKDIR /app
# COPY ./package.json ./
# RUN npm install
# COPY ./ ./
# CMD npx yarn-deduplicate --packages @types/react yarn.lock
# RUN npm run build
# RUN npm install -g serve
# CMD serve -s build -l 3001