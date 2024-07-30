# Backend Node JS Summer Enrichment Project

## Module Information

### Module Details

- **Module Title:** Backend Node JS
- **Module Overview:** This module aims to provide students with a solid grasp of key concepts, principles, and best practices in backend development using Node.js. Students will learn to build efficient and scalable server-side applications, manage databases, and implement RESTful APIs, laying the groundwork for robust backend programming skills.
- **Tutor / TA:** Ms. Pratima Gautam / Mr. Sachin Sherchan

### Assessments

#### Assessment Component 1

- **Method:** Api Documentation Demonstration
- **Description:** Api Documentation Demo during the last workshop
- **Type:** Individual
- **Overall Weight (%):** 100%
- **Time and Duration:** Week 3

## Lesson Plan

### Week 1

- **Introduction to Node.js**

  - What is Node.js?
  - Why use Node.js?
  - Installing Node.js and npm
  - Node.js Basics
    - Running a simple Node.js script
    - Understanding the Node.js runtime
  - Core Modules
    - Using require to import modules
    - Overview of core modules: fs, path, http
  - **Hands-on Exercise:** Write a simple Node.js script to read a file and print its contents

- **Asynchronous Programming in Node.js**

  - Understanding callbacks
  - Introduction to Promises and async/await
  - Event-driven Architecture
    - Event loop and event emitters
  - Building a Simple HTTP Server
    - Creating a basic server with the http module
  - **Hands-on Exercise:** Build a simple HTTP server that responds with "Hello, World!"

- **Introduction to npm**
  - What is npm?
  - Installing and managing packages
  - Creating a Node.js Project
    - Initializing a project with package.json
    - Installing dependencies
  - Working with External Libraries
    - Using popular libraries like lodash and moment
  - **Hands-on Exercise:** Create a simple project using external libraries

### Week 2

- **Introduction to Express.js**

  - What is Express.js?
  - Why use Express.js?
  - Setting Up Express.js
    - Installing Express.js
    - Creating a basic Express.js application
  - Basic Routing
    - Handling GET and POST requests
  - **Hands-on Exercise:** Build a simple Express.js server with basic routes

- **Understanding Middleware**

  - What is middleware?
  - Types of middleware (built-in, third-party, custom)
  - Using Built-in Middleware
    - express.json()
    - express.urlencoded()
  - Creating Custom Middleware
  - **Hands-on Exercise:** Implement and use custom middleware in an Express.js app

- **Route Parameters and Query Strings**
  - Handling dynamic routes
  - Working with query parameters
  - Error Handling
    - Centralized error handling in Express.js
    - Creating error-handling middleware
  - **Hands-on Exercise:** Build routes with parameters and query strings, and implement error handling

### Week 3

- **Introduction to REST**

  - What is REST?
  - Principles of RESTful APIs
  - Designing RESTful Endpoints
    - Understanding CRUD operations
    - Designing endpoints for a simple resource (e.g., users)
  - **Hands-on Exercise:** Create a basic CRUD API structure

- **Introduction to Databases**

  - Overview of popular databases (MongoDB, MySQL)
  - Using a Database with Express.js
    - Setting up MongoDB (or another database)
    - Connecting to the database from Express.js
    - CRUD Operations with a Database
  - **Hands-on Exercise:** Integrate a database with the RESTful API

- **Putting It All Together**
  - Building a complete RESTful API
  - Implementing authentication (optional)
  - Best Practices
    - Code organisation
    - Security considerations
    - Deployment
      - Introduction to deploying Node.js apps
  - **Hands-on Exercise:** Complete a small project incorporating all the learned concepts
    - Deploy the application (if time permits)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/nodejs-summer-enrichment.git
   cd nodejs-summer-enrichment
   ```

2. **Install Dependencies:**
  Go to individual folder and run the following command if you see package.json file.

   ```bash
   npm install
   ```

    If you don't see package.json file, you can simply run

    ```bash
    node filename.js
    ```

3. **Set Up Environment Variables:**

   - Rename `.env.example` file to `.env`.
   - Add necessary environment variables like database credentials, API keys, etc.

4. **Start the Server:**

   ```bash
   npm start
   ```

Thank you!
