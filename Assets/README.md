Project Description
# Pin-it
Pin-it | Application designed to organize all the applications you use every day, having everything within your main internet access.

# Purpose
The purpose of this app is to improve the management and order of our applications, saving all our online websites in one site and divide them into categories, avoiding wastig time looking for them one by one and improving our experience within the browsers.

# MVP
```md
As a user I want to be able to store the applications I usually use in a daily basis, so I can organize and get into my apps faster.
```
This app should cover all the following criteria:
```md
When I get into my app.
Then I am presented with a nav bar.
When I look into the nav bar.
Then I am presented with a search input, categories options and icons.
When I click in the top-right icon.
Then a log-in button is displayed.
When I click on log-in button.
Then I am presented in a new page, where I can create a new account or submit an account already created.
When I log-in an account.
Then I get in and a log out-button appears by clicking at the top-right icon of the page.
When I click in a new title.
Then a modal card appears waiting for user to submit info required, such as website link, page name, image and category.
When I click save in the modal card.
Then a new card it´s added to the page.
```
# Getting Started
These are the instructions to follow as a user:

1. Visit the following URL: https://pin-it-app-project.herokuapp.com/
2. Create a new account for Pin-it by clicking at the top-right icon and then another click in log-in button.
3. If you have an account created please submit it as below.
4. IF you don´t have an account, please create one as below.
5. Log-in your account. 
6. Start adding your favorite online websites by clicking in new tilte.
7. Add a new website and assign the appropriate category.
8. Filter the websites added by categorie.
9. Click in log out button inside the top-right icon to log out from Pin-it.

# Frontend - code

The app was built with help of the following technologies:

* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* 	![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
* ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

# Pin-it Deployed.
This is how Pin-it looks like from the landing page.

We can see how to log in with your account.

Adding a new card to your website.

saving a new online website in my page.

Loggin out from Pin-it.

# Futures Implementations

Implement the Google API to log in with a google account such a gmail.

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

