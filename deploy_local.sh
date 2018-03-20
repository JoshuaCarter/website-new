#!/bin/sh

line="--------------------------------------"
form="%s\n %s:\n%s\n"

#build script for nodejs
printf "$form" "$line" "Build frontend" "$line"
cd frontend
npm run build
rm -r ../backend/public
mkdir -p ../backend/public
mv ./build/* ../backend/public/
rm -r ./build

printf "$form" "$line" "Restarting container" "$line"
cd ../
docker stop -t 0 jc-website
docker build -t jc/website:v1.0 ./	
docker run --rm -d --name jc-website jc/website:v1.0

#quit on user input
echo ""
read -n 1 -s -r -p "Press any key to quit"