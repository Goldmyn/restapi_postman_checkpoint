# User Management API

This is a simple User Management API built with Express and MongoDB. It allows you to create, retrieve, update, and delete users through RESTful endpoints.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [License](#license)

## Features

- Create a new user
- Retrieve all users
- Update a specific user by ID
- Delete a specific user by ID

## Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- dotenv for environment variable management
- validator for input validation

## Getting Started

To get a local copy up and running follow these simple steps.

1. Clone the repo

   ```bash
   git clone https://github.com/Goldmyn/restapi_postman_checkpoint
   ```

2. Navigate to the project directory

   ```bash
   cd user-management-api
   ```

3. Install the required packages

   ```bash
   npm install
   ```

4. Create a `.env` file in the `config` directory and add your MongoDB URI:

   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   ```

5. Start the server
   ```bash
   npm start
   ```

The server will start on `http://localhost:3000`.

## API Endpoints

### 1. Create a User

- **POST** `/api/v1/create-user`
- **Request Body**:
  ```json
  {
    "userName": "User Name",
    "email": "user@example.com",
    "age": 40
  }
  ```

### 2. Get All Users

- **GET** `/api/v1/get-user`
- **Response**:
  ```json
  [
    {
      "age": 40,
      "userName": "User One",
      "email": "user1@example.com"
    },
    {
      "age": 30,
      "userName": "User Two",
      "email": "user2@example.com"
    }
  ]
  ```

### 3. Update a User

- **PUT** `/api/v1/update-user/:userId`
- **Request Body**:
  ```json
  {
    "userName": "Updated User Name",
    "email": "updateduser@example.com"
  }
  ```

### 4. Delete a User

- **DELETE** `/api/v1/delete-user/:userId`

## Environment Variables

The application uses environment variables to manage sensitive information. You will need to set the following variable in your `.env` file:

- `MONGODB_URI`: Your MongoDB connection string.

## Usage

Once the server is running, you can use tools like Postman  to interact with the API. Ensure you have created the necessary users and that your MongoDB instance is running.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
