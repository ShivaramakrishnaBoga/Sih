-- create database
CREATE DATABASE innovation_portal;

USE innovation_portal;

-- department table
CREATE TABLE department (
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(50)
);

-- users table
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    role VARCHAR(20),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);

-- projects table
CREATE TABLE projects (
    project_id INT PRIMARY KEY AUTO_INCREMENT,
    project_name VARCHAR(100),
    project_desc VARCHAR(200),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- patents table
CREATE TABLE patents (
    patent_id INT PRIMARY KEY AUTO_INCREMENT,
    patent_name VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- publications table
CREATE TABLE publications (
    pub_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- achievements table
CREATE TABLE achievements (
    achievement_id INT PRIMARY KEY AUTO_INCREMENT,
    achievement_name VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
