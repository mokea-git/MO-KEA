# 빌드 단계
FROM node:20-alpine AS build
WORKDIR /app

# 패키지 설치
COPY mokea-app/package*.json ./
RUN npm install

# 소스 복사 및 빌드
COPY mokea-app/ .
RUN npm run build

# 실행 단계 (Nginx)
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# SPA 라우팅 대응 설정
RUN printf "server { \n\
    listen 80; \n\
    location / { \n\
        root /usr/share/nginx/html; \n\
        index index.html; \n\
        try_files \$uri \$uri/ /index.html; \n\
    } \n\
}" > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]