Project Description
# Pin-it
Pin-it | Application designed to organize all the applications you use every day, having everything within your main internet access.

# Purpose
The purpose of this app is to improve the management of our applications, saving all our accounts in one site, avoiding wastig time looking for them one by one and improving our experience within the browser.

# MVP

As a user I want to be able to store the applications I usually use in a daily basis, so I can organize and get into my apps faster.

This app should cover all the following criteria:

When I get into my app.
Then I am presented with a nav bar.
When I look into the nav bar.
Then I am presented with a search input, categories options and log-in button.
When I click in log-in button.
Then I am presented in a new page, where I can submit my account info.
When I log-in my account.
Then I get in and a log out-button appears at the top-right of the page.
When I click in a new card.
Then a new card is created with empty fields to add a new app and my profile account.

# Getting Started
These are the instructions to follow as a user:

1. go to the following URL: 
2. create a new account for Pin-it.
3. Log-in your account 
4. start adding your favorite online websites.
5. This is how you can log out from Pin-it.

# Frontend - code
The app was built with help of the following technologies:

* TailWind
* CSS
* HTML
* JavaScript

# Pin-it Deployed.
This is how Pin-it looks like from the landing page.

We can see how to log in with your account.

Adding a new card to your website.

saving a new online website in my page.

Loggin out from Pin-it.

# Backend - code
This section describes the main FE features and how they work...

# Node.js
Node.js is a runtime environment for JavaScript that runs on the server.
Node.js advantage is that allows frontend developers that write JavaScript to run the server-side code and frontend-side code without the need to learn a completely different language.

# server.js 
const http = require('http')
const hostname = '127.0.0.1'const port = 3000
const server = http.createServer((req, res) => {  res.statusCode = 200  res.setHeader('Content-Type', 'text/plain')  res.end('Hello World\n')})
server.listen(port, hostname, () => {  console.log(`Server running at http://${hostname}:${port}/`)})

# Package.json file
A package.json file can be described as a manifest of your project that includes the packages and applications it depends on, information about its unique source control, and specific metadata like the project's name, description, and author.

# Node.js frameworks - Express
Es the most widely used Node.js server framework, and allows you to quickly and easily establish your API routes and associated HTTP request methods.

# Routing
Server design to handle responses when a client makes a request at a specific endpoint, or URL. In an earlier unit, you learned how to make GET requests from the client-side. Now, you will learn how those requests are handled on the server-side. Your server will listen for a specific type of request at a specific endpoint and when it hears that request, it will respond accordingly. 

# MySQL
A database is a collection of data stored electronically. The database management system (DBMS) we will be using in this unit is MySQL. MySQL is the most popular SQL database. The SQL in MySQL is short for Structured Query Language, and that structure is relational. A relational database stores and finds data based on its relationship to other data in the database. Relational databases are tabular, meaning data is stored in tables composed of rows and columns, much like a spreadsheet.

# Sequelize
Sequelize is a module that enables JS developers to work with relatuina data more easily. 
# Heroku

=================================================================================

