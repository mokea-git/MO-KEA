# 1단계: 빌드
FROM node:20-alpine AS build
WORKDIR /app

# 패키지 설치 (메모리 절약을 위해 ci 사용)
COPY mokea-app/package*.json ./
RUN npm ci --quiet

# 소스 복사 및 빌드
COPY mokea-app/ .
RUN npm run build

# 2단계: 실행 (Nginx 없이 Node로 직접 서빙)
# 매우 가벼운 정적 서버인 'serve' 패키지를 사용합니다.
RUN npm install -g serve

# Traefik이 바라볼 포트 설정
EXPOSE 80

# serve 명령어로 dist 폴더를 80포트에서 실행
# -s 옵션은 SPA(Single Page Application) 라우팅을 지원합니다.
CMD ["serve", "-s", "dist", "-l", "80"]