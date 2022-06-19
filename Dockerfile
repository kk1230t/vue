FROM nginx:stable-alpine

ENV TZ=Asia/Seoul

COPY ./dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
