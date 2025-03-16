# Opinion Trading Backend

## Overview
This is a backend system for an **Opinion Trading App**, built using **Node.js (Express.js)**, **MongoDB**, and **Socket.io**. It fetches live event data, processes trades, and provides real-time updates using WebSockets.

## Features
- User Authentication
- Live Event Data Fetching
- WebSocket Integration
- Trade Execution & Settlement
- Admin Panel API
- Logging & Error Handling

## Tech Stack
- **Node.js** (Express.js for backend API)
- **MongoDB** (for data storage)
- **Socket.io** (for real-time WebSockets)
- **JWT** (for authentication & authorization)
- **Axios** (for API fetching)
- **Winston** (for logging)

---

## Installation & Setup

### Prerequisites
- **Node.js** installed
- **MongoDB** installed locally or a cloud database (MongoDB Atlas)
- **Git** installed

### Clone the Repository
```sh
git clone https://github.com/yashrsb/opinion-trading-backend
cd opinion-trading-backend
```

### Install Dependencies
```sh
npm install
```

### Environment Variables
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/<db-name>
JWT_SECRET=secret_key
```

### Run the Server
For development (auto-reload):
```sh
npm run dev
```
For production:
```sh
npm start
```

Server will run at **http://localhost:5000** or the deployed URL **[https://opinion-trading-backend.onrender.com](https://opinion-trading-backend.onrender.com)**

---

## API Endpoints

### **Authentication APIs**

#### **Register User**
- **Endpoint:** `POST /api/auth/register`
- **Body:**
  ```json
  {
    "username": "test",
    "email": "test@mail.com",
    "password": "pass123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "user": { "id": "..", "username": "test" }
  }
  ```

#### **Login User**
- **Endpoint:** `POST /api/auth/login`
- **Body:**
  ```json
  {
    "email": "test@mail.com",
    "password": "pass123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "generated_jwt_token"
  }
  ```

### **Events APIs**

#### **Get All Events**
- **Endpoint:** `GET /api/events`
- **Headers:**
  ```json
  { "Authorization": "Bearer jwt_token" }
  ```

#### **Create Event (Admin Only)**
- **Endpoint:** `POST /api/events`
- **Body:**
  ```json
  {
    "name": "Cricket Match",
    "odds": 1.8
  }
  ```

### **Trade APIs**

#### **Place Trade**
- **Endpoint:** `POST /api/trades`
- **Body:**
  ```json
  {
    "event": "event_id",
    "amount": 100,
    "odds": 2.5
  }
  ```

#### **Get User Trades**
- **Endpoint:** `GET /api/trades`

---

## WebSocket Events
- `place_trade` → Emits trade data in real-time
- `update_trades` → Updates the frontend with new trades

---

## API Testing with Postman
To test the API using Postman:

1. Open **Postman** and go to **Import**.
2. Choose **Import From Link**.
3. Paste the following URL (replace `<POSTMAN_COLLECTION_URL>` with actual collection link):
   ```
   https://api.postman.com/collections/21612992-74baaa67-ef58-4cf9-b967-e06d0e856ebe
   ```
4. Click **Import**.
5. Update the environment variables if needed.
6. Test the APIs using **http://localhost:5000** (for local development) or **[https://opinion-trading-backend.onrender.com](https://opinion-trading-backend.onrender.com)** (for deployed version).

---

## Logging & Error Handling
- **Winston** is used for structured logging
- Errors are handled with proper HTTP status codes

---

## Contribution
Feel free to fork, create a feature branch, and submit a PR!

---

## License
This project is **MIT Licensed**.