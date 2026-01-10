FROM node:20-alpine
WORKDIR /app

# dist 폴더 안의 모든 파일을 현재 작업 디렉토리(/app)로 복사
COPY ./dist/ ./

RUN npm install -g serve
EXPOSE 80

# 현재 디렉토리(/app)의 index.html을 서빙합니다.
CMD ["serve", "-s", ".", "-l", "80"]