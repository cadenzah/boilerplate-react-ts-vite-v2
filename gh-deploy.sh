#!/usr/bin/env sh

# https://vitejs.dev/guide/static-deploy.html
# 정적 웹 페이지로 배포하기

# 에러가 발생될 경우 스크립트 실행을 중지
set -e

# 앱 빌드
yarn build

# 빌드된 파일이 존재하는 dist 디렉터리로 이동
cd dist

# Jekyll 처리를 우회하기 위해 .nojekyll 파일 생성
echo > .nojekyll

# CNAME 파일을 이용해 커스텀 도메인을 지정할 수도 있습니다.
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'github page deploy'

github_id=$1
github_token=$2

PAGE_URL=$(cat ../.env | grep PAGE_URL | cut -d '=' -f2 | tr -d '"')
REPO_NAME=$(cat ../.env | grep REPO_NAME | cut -d '=' -f2 | tr -d '"')
REPO_OWNER=$(cat ../.env | grep REPO_OWNER | cut -d '=' -f2 | tr -d '"')

if [ ! "$github_id" ] || [ ! "$github_token" ]
then
  # https://github.com/<USERNAME>/<REPO>를 remote origin으로 설정
  git remote add origin https://github.com/$REPO_OWNER/$REPO_NAME.git
else
  # Github Actions 에서 동작하면, Github credential을 인자로 받아 사용
  git remote add origin https://$github_id:$github_token@github.com/$REPO_OWNER/$REPO_NAME.git
fi

# https://<USERNAME>.github.io 에 배포
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# https://<USERNAME>.github.io/<REPO> 에 배포
git push -f origin main:gh-pages

cd ..
rm -rf dist