# Dnd-Creator
INF 124 DnD Group Project

Overview
The DND Web Application is a platform designed to assist Dungeons & Dragons (DND) players in managing their game sessions. The application allows users to register, create and join groups, manage character sheets, and reset their passwords. Additionally, the application provides real-time weather information based on the user's location.

Features:
User Registration and Login: Secure registration and login functionality for users.
Profile Management: Users can view their profile information and reset their password.
Group Management: Create, join, and manage DND groups.
Character Sheet Management: Create and manage character sheets with auto-calculated stats.
Real-Time Weather: Displays current weather information on the profile page.

Tech Stack
Front-End: React
Back-End: Express.js, Node.js
Database: MongoDB
APIs: WeatherAPI for weather information
Other Tools: Various npm libraries

Getting Started
Prerequisites
1. Node.js and npm installed on your machine
2. MongoDB installed and running locally

Installation
1. Clone the repository
2a. 'cd dnd-creator'
3a. 'npm install'

2b. 'cd express'
3a. 'npm install'


4. Install the dependencies for both the dnd-creator and the express server:

    Install MongoDB as server
    https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/

``

Starting the Express Backend
1. 'cd express' from project root
2. 'node server.js'

* Note: The server will run on http://localhost:4000.

``

Starting the React Frontend
1. 'cd dnd-creator' from project root
2. 'npm start'

* Note: The client will run on http://localhost:3000 and can be accessed through the browser.

``

Application Structure
Front-End (dnd-creator)
The front-end is built with React and organized into the following components:

LoginPage.js: Handles user login and registration.
ProfilePage.js: Displays user profile information and allows password reset.
GroupAddPage.js: Allows users to create new groups.
GroupManagePage.js: Manages group members and details.
SheetAddPage.js: Creates and manages character sheets.
SheetsMainPage.js: Displays all character sheets.
ResetPasswordPage.js: Handles password reset functionality.

Back-End (express)
The back-end is built with Express.js and organized into the following routes:

user-routes.js: Handles user registration, login, and password reset.

group-routes.js: Manages group creation, retrieval, and member management.

sheet-routes.js: Handles character sheet creation, retrieval, and updates.

Database
MongoDB is used to store user information, group details, and character sheets. The database schema includes:

User: Stores username, password, group IDs, character sheet IDs, and profile creation date.

Group: Stores group name, description, admin ID, and member IDs.

Character Sheet: Stores character stats and details such as class, background, race, and alignment.

API Endpoints

User Routes:

POST /user/register: Registers a new user.

POST /user/login: Logs in a user.

POST /user/reset-password: Resets a user's password.

Group Routes:

POST /group/create: Creates a new group.

GET /group: Retrieves all groups.

GET /group/:id: Retrieves a group by ID.

POST /group/:id/addMember: Adds a member to a group.


Character Sheet Routes:

POST /sheet/create: Creates a new character sheet.

GET /sheet: Retrieves all character sheets.

GET /sheet/:id: Retrieves a character sheet by ID.

Challenges and Solutions
During development, we faced challenges with secure password handling and data validation. Future improvements include adding in-app messaging, calendar integration for scheduling game sessions, and more detailed character customization options.
