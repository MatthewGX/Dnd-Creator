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
Node.js and npm installed on your machine
MongoDB installed and running locally
Installation
Clone the repository:

```
cd dnd-creator
```
Install the dependencies for both the dnd-creator and serexpresser:

Install MongoDB as server
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/

Start MongoDB
Make sure MongoDB is running. You can start it with:

```
cd express
node server.js
```
The server will run on http://localhost:4000.

Start the Client
Navigate to the client directory and start the client:

```
cd ..
cd dnd-creator
npm start
```
The client will run on http://localhost:3000.

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

User Routes

POST /user/register: Registers a new user.

POST /user/login: Logs in a user.

POST /user/reset-password: Resets a user's password.

Group Routes

POST /group/create: Creates a new group.

GET /group: Retrieves all groups.

GET /group/:id: Retrieves a group by ID.

POST /group/:id/addMember: Adds a member to a group.

PATCH /group/promote: Promotes a member to admin.

PATCH /group/removeUser: Removes a user from a group.

Character Sheet Routes

POST /sheet/create: Creates a new character sheet.

GET /sheet: Retrieves all character sheets.

GET /sheet/:id: Retrieves a character sheet by ID.

Deployment
To deploy the application, you can use services like Heroku for the server and Vercel or Netlify for the client. Make sure to configure environment variables and database connections accordingly.

Challenges and Solutions
During development, we faced challenges with secure password handling and data validation. Future improvements include adding in-app messaging, calendar integration for scheduling game sessions, and more detailed character customization options.

Future Improvements
In-App Messaging: Allow users to communicate within the app.
Calendar Integration: Schedule and manage game sessions.
Enhanced Character Customization: Provide more options for character creation and management.

Acknowledgments
Thanks to the DND community for their inspiration and support.
Special thanks to the development team for their hard work and dedication.
