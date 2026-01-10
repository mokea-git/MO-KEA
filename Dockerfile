# 1단계: 빌드
FROM node:20-alpine AS build
WORKDIR /app

# 현재 위치에 있는 package 파일을 복사 (mokea-app 폴더 기준)
COPY package*.json ./

# 에러 무시 옵션과 최소 설치 옵션 사용
RUN npm install --no-audit --progress=false

# 전체 소스 복사
COPY . .

# 빌드 실행
RUN npm run build

# 2단계: 실행 (Nginx 없이 가벼운 serve 사용)
FROM node:20-alpine
WORKDIR /app

# 빌드 결과물만 복사
COPY --from=build /app/dist ./dist

# 서빙용 패키지 설치
RUN npm install -g serve

EXPOSE 80

# SPA 지원 및 80포트 서빙
CMD ["serve", "-s", "dist", "-l", "80"]