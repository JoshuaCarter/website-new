#!/bin/sh

line="--------------------------------------"
form="%s\n %s:\n%s\n"

#build script for nodejs
printf "$form" "$line" "Build React" "$line"
cd frontend
npm run build
rm -r ../backend/public
mkdir -p ../backend/public
mv ./build/* ../backend/public/
rm -r ./build

printf "$form" "$line" "Build Docker" "$line"
cd ../
docker build -t jc/express-img:1.0 ./

#quit on user input
echo ""
read -n 1 -s -r -p "Press any key to quit"