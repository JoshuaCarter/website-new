#!/bin/sh

# REQUIREMENTS:
#	1) EC2 instance must have git, npm, and docker installed.
#	2) 'ec2-user' must belong to the docker group.
#	3) The dir '/var/www/' must exist and the owner must be 'ec2-user'.

line="-----------------------------------------------------------------------------"
form="%s\n %s:\n%s\n"

printf "$form" "$line" "Connecting to server" "$line"
#ssh into ec2
ssh -i "my-website.pem" ec2-user@ec2-54-153-231-13.ap-southeast-2.compute.amazonaws.com << SSH

printf "$form" "$line" "Getting repository" "$line"
	cd /var/www
	git clone https://github.com/JoshuaCarter/website-new.git app
	cd ./app
	git pull

printf "$form" "$line" "Installing modules" "$line"
	cd /var/www/app
	npm install -s --prefix ./frontend
	npm install -s --prefix ./backend
	
printf "$form" "$line" "Building frontend" "$line"
	cd /var/www/app/frontend
	npm run build
	mv ./build ../backend

printf "$form" "$line" "Moving build to /public" "$line"
	cd /var/www/app/backend
	rm -r ./public
	mkdir -p ./public
	mv ./build/* ./public
	rm -r ./build
	echo "done"

printf "$form" "$line" "Restarting container" "$line"
	cd /var/www/app
	docker stop -t 0 jc-website
	docker build -t jc/website:v1.0 ./	
	docker run --rm -d -p 80:80 --name jc-website jc/website:v1.0
SSH

#quit on user input
echo ""
read -n 1 -s -r -p "Press any key to quit"