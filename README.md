# student-application
this is my project
This is command to install all packages
#FrontEnd packages

sudo apt update -y
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
sudo systemctl status nginx
cd /var/www/html
sudo rm index.nginx-debian.html
sudo vim index.html

#Backend Packages
sudo apt install nodejs -y
sudo apt install npm -y
npm init -y
npm install express mysql2
sudo vim server.js
sudo vim server.js
node server.js

#Rds Database
sudo apt install mysql-client -y
mysql --version
mysql -h 'rds endpoint' -u username -p
create database student_db;
use database student_db;

# to connect frontend and backend
sudo vim /etc/nginx/sites-available/default
sudo nginx -t
sudo systemctl reload nginx

#to connect backend and database
sudo vim db.js

curl http://localhost:3000/api/students






