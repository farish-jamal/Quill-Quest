# Blog Website Backend

This repository contains the backend code for our blog website. It provides essential server-side functionality to support the blogging platform.

## Technologies Used

- Node.js
- Express
- MongoDB
- JSON Web Tokens (JWT)
- bcrypt
- Multer
- dotenv
- CORS

## Features

- User authentication using JWT tokens
- Secure password hashing with bcrypt
- File uploads for blog images and media using Multer
- Flexible data storage and retrieval with MongoDB
- Environment variable management with dotenv
- Cross-origin resource sharing (CORS) for enabling communication with the frontend

## Getting Started

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the root directory and add the following environment variables:
``JWT_SECRET=your_jwt_secret
MONGODB_URL=your_mongodb_url``
4. Start the server using `npm start`.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the functionality or documentation of this backend.
