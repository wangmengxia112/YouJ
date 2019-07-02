SET NAMES UTF-8;
DROP DATABASE IF EXISTS yj_user;
CREATE DATABASE yj_user CHARSET=UTF8;
USE yj_user;
CREATE TABLE laptop(
uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
uname VARCHAR(32),
upwd  VARCHAR(32),
email VARCHAR(64),
phone VARCHAR(11) NOT NULL UNIQUE,
user_name VARCHAR(32),
gender     INT);
INSERT INTO user VALUES('1','小静','123123','liujing@qq.com','15190031345','刘然','1');
INSERT INTO user VALUES('2','天天','121123','xiatian@163.com','15191231235','夏静','0');
INSERT INTO user VALUES('3','小然','121113','tianran@163.com','13391231465','田然','1');