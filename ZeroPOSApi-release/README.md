# Backend API for Recycling Management System

ZeroPOSApi is a backend API project designed for managing recycling operations. It provides endpoints for member management, material transactions, and more.

## Features

- **Member Management**: Query and manage member information.
- **Material Transactions**: Calculate and process transactions for recyclable materials.
- **Store Location Queries**: Retrieve information about specific store locations.
- **API Documentation**: Integrated Swagger UI for comprehensive API documentation.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ZeroPOSApi.git
   cd ZeroPOSApi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - For production, create a `.env.production` file in the root directory with the following content:
     ```
     DB_USER=prod_db_user
     DB_HOST=prod_db_host
     DB_DATABASE=prod_db_name
     DB_PASSWORD=prod_db_password
     DB_PORT=prod_db_port
     SECRET_KEY=prod_secret_key
     PORT=3000
     ```
   - For testing, create a `.env.test` file in the root directory with the following content:
     ```
     DB_USER=test_db_user
     DB_HOST=test_db_host
     DB_DATABASE=test_db_name
     DB_PASSWORD=test_db_password
     DB_PORT=test_db_port
     SECRET_KEY=test_secret_key
     PORT=3000
     ```

### Running the Application

1. Start the server in production mode:
   ```bash
   NODE_ENV=production node server.js
   ```

2. Start the server in test mode:
   ```bash
   NODE_ENV=test node server.js
   ```

3. Access the API documentation at `http://localhost:3000/api-docs`.

## Usage Guidelines

- **Members API**: Use `/api/members` endpoint to query member information.
- **Transactions API**: Use `/api/transactions` endpoint to calculate and process material transactions.
- **Store Location API**: Use `/api/storeshop` endpoint to query store location information.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License.
