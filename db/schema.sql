DROP DATABASE IF EXISTS pin_it;

CREATE DATABASE pin_it;

CREATE TABLE category (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(30),
    
);

CREATE TABLE pages (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    url VARCHAR(1234),
    img VARCHAR(1234),
    INDEX catId (category_id),
    CONSTRAINT fk_department FOREIGN KEY (category_id) REFERENCES category(id) ON UPDATE CASCADE
);
