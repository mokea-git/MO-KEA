# 가벼운 Node 환경 사용
FROM node:20-alpine
WORKDIR /app

# 로컬에서 빌드해서 올린 dist 폴더를 컨테이너로 복사 (빌드 과정 생략!)
COPY mokea-app/dist ./dist

# 정적 파일 서빙을 위한 초경량 패키지 설치 (금방 끝납니다)
RUN npm install -g serve

# Traefik이 연결될 내부 포트
EXPOSE 80

# SPA 라우팅 지원 모드로 실행
CMD ["serve", "-s", "dist", "-l", "80"]