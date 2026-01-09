# 1단계: 빌드 (Node.js)
FROM node:20-alpine AS build
WORKDIR /app

# 현재 폴더(mokea-app)에 있는 파일을 바로 복사합니다.
COPY package*.json ./
RUN npm install

# 나머지 소스 전체 복사
COPY . .

# 빌드 실행 (에러 나면 여기서 멈춥니다)
RUN npm run build

# 2단계: 실행 (Nginx)
FROM nginx:stable-alpine
# Vite는 기본적으로 dist 폴더를 만듭니다.
COPY --from=build /app/dist /usr/share/nginx/html

# SPA 라우팅 설정 (Nginx)
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