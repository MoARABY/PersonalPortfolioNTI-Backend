# Personal Portfolio Backend API
- This repository contains the backend API for a personal portfolio website. The API is built using Node.js, Express, and MongoDB and allows dynamic management of various sections like services, projects, skills, education, experience, contacts, reviews, and the "About Me" section through an admin dashboard.

## Features
- Dynamic Content Management: Easily update and manage the portfolio content, including services, projects, skills, education, experience, contacts, reviews, and the "About Me" section via an admin dashboard.
- Admin Dashboard: Secure and intuitive dashboard for managing all aspects of the portfolio.
- Authentication & Authorization: Secure access to the admin dashboard using JWT and bcrypt for authentication and authorization.
- RESTful API: Organized structure to handle CRUD operations for all portfolio sections.
- Logging & Error Handling: Comprehensive logging using Winston and Morgan, and error handling for better debugging.
- Security: Implementation of security best practices using Helmet, CORS, and express-rate-limit.
- API Documentation: Detailed API documentation with Swagger.

## Table of Contents
- Technologies Used
- Installation
- Contributing
- License

## Technologies Used
- Node.js: JavaScript runtime environment.
- Express.js: Web framework for Node.js.
- MongoDB: NoSQL database.
- Mongoose: ODM for MongoDB and Node.js.
- JWT: JSON Web Tokens for secure authentication.
- Helmet: Security middleware.
- CORS: Middleware for handling Cross-Origin Resource Sharing.
- Express-Rate-Limit: Middleware to limit repeated requests to public APIs.

## Installation
- git clone https://github.com/yourusername/portfolio-backend.git
- cd portfolio-backend
- npm install
- Set up environment variables: Create a .env file in the root directory and add the following:
-  PORT=5000
-  MONGO_URI=your_mongodb_connection_string
-  JWT_SECRET=your_jwt_secret_key
- npm run dev

## Contributing
- Contributions are welcome! Please feel free to submit a Pull Request or open an Issue to discuss what you would like to change.

## License
- This project is licensed under the MIT License. See the LICENSE file for details.
