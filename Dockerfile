# 가벼운 Node 환경 사용
FROM node:20-alpine
WORKDIR /app

# 현재 경로의 dist 폴더를 컨테이너의 dist 폴더로 복사
# (Git Repository 루트에 dist 폴더가 바로 있다면 아래처럼 작성)
COPY ./dist ./dist

# 정적 파일 서빙을 위한 패키지 설치
RUN npm install -g serve

# Traefik 연결 포트
EXPOSE 80

# -s 옵션은 SPA 라우팅(새로고침 시 404 방지)을 위해 필수입니다.
CMD ["serve", "-s", "dist", "-l", "80"]