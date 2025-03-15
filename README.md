# Opinion Trading Backend

## Overview
This is a backend system for an **Opinion Trading App**, built using **Node.js (Express.js)**, **MongoDB**, and **Socket.io**. It fetches live event data, processes trades, and provides real-time updates using WebSockets.

## Features
- **User Authentication** (JWT-based login & registration)
- **Live Event Data Fetching** (from external APIs or mock data)
- **WebSocket Integration** (real-time trade updates)
- **Trade Execution & Settlement**
- **Admin Panel API** (for managing events & trades)
- **Logging & Error Handling** (Winston for logging)

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
- **Node.js** installed (v16+ recommended)
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
MONGO_URI=mongodb://localhost:27017/opinion_trading
JWT_SECRET=secret_key
```

### Run the Server
For development (with auto-reload):
```sh
npm run dev
```
For production:
```sh
npm start
```

Server will run at **http://localhost:5000**

---

## API Endpoints

### **Authentication APIs**

#### **Register User**
- **Endpoint:** `POST /api/auth/register`
- **Body:**
  ```json
  {
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully",
    "user": { "id": "...", "username": "testuser" }
  }
  ```

#### **Login User**
- **Endpoint:** `POST /api/auth/login`
- **Body:**
  ```json
  {
    "email": "test@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your_jwt_token"
  }
  ```

### **Events APIs**

#### **Get All Events**
- **Endpoint:** `GET /api/events`
- **Headers:**
  ```json
  { "Authorization": "Bearer your_jwt_token" }
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
    "event": "event_id_here",
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

## Logging & Error Handling
- **Winston** is used for structured logging
- Errors are handled with proper HTTP status codes

---

## Deployment
### Deploy on Render
1. Push the code to GitHub.
2. Link the repository in **Render**.
3. Set up environment variables.
4. Deploy & get the live API URL.

---

## Contribution
Feel free to fork, create a feature branch, and submit a PR!

---

## License
This project is **MIT Licensed**.

---

## Contact
For queries, contact **yrajsingh0001@gmail.com**.

