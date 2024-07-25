# KisanWise

KisanWise is an AI-powered platform providing personalized agricultural advice to farmers. Leveraging advanced AI, it offers real-time assistance, expert guidance, and a wealth of resources to support sustainable farming. Built with React, Express, and MongoDB, KisanWise aims to enhance productivity and ensure food security.

## Project Structure

```
kisanWise/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── services/
│   ├── config/
│   ├── utils/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── store/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
├── .gitignore
├── README.md
└── package.json
```

## Getting Started

### Prerequisites

Make sure you have the following installed on your local development environment:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Backend Setup

1. **Navigate to the `backend` directory:**

    ```bash
    cd backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file with the following content:**

    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

4. **Start the backend server:**

    ```bash
    npm start
    ```

### Frontend Setup

1. **Navigate to the `frontend` directory:**

    ```bash
    cd ../frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the frontend development server:**

    ```bash
    npm start
    ```

### Running Both Servers Concurrently

To run both the backend and frontend servers concurrently, you can use the root `package.json` scripts.

1. **Navigate to the root directory:**

    ```bash
    cd ..
    ```

2. **Run the following command to start both servers:**

    ```bash
    npm start
    ```

This will concurrently run the backend server and the frontend development server.

## Contributing

We welcome contributions from the community. Please fork the repository, make your changes, and submit a pull request. Ensure your code adheres to our coding standards and includes relevant tests.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Feel free to reach out if you have any questions or need further assistance getting started with the project.