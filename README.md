# Quick Chat

A full-stack real-time chat application built with the MERN stack. Users can sign up, log in, message each other instantly, share images, and manage their profile.

**Live repository:** [github.com/Nikhil-bth/Quick-chat](https://github.com/Nikhil-bth/Quick-chat)

---

## Features

- **Real-time messaging** — Instant message delivery using Socket.IO
- **JWT authentication** — Secure sign up, login, and protected routes
- **Online status** — See which users are currently online
- **Profile management** — Update profile picture and bio (Cloudinary)
- **Chat management** — Select users, view chat history, unread message counts
- **Image sharing** — Send images in chat via Cloudinary upload

---

## Tech Stack

| Layer      | Technologies |
|------------|--------------|
| Frontend   | React, Vite, Tailwind CSS, React Router, Axios, Socket.IO Client |
| Backend    | Node.js, Express, Socket.IO, MongoDB (Mongoose), JWT, bcryptjs |
| Storage    | MongoDB Atlas, Cloudinary |
| Tooling    | ESLint, Nodemon, dotenv |

---

## Project Structure

```
QuickChat-Full-Stack/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Login, Home, Profile
│   │   └── context/        # Auth & Chat state
│   └── .env.example
├── server/                 # Express + Socket.IO backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── .env.example
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [MongoDB](https://www.mongodb.com/) (local or MongoDB Atlas)
- [Cloudinary](https://cloudinary.com/) account (for profile pics & image messages)

### 1. Clone the repository

```bash
git clone https://github.com/Nikhil-bth/Quick-chat.git
cd Quick-chat
```

### 2. Backend setup

```bash
cd server
npm install
cp .env.example .env
```

Edit `server/.env` and add your real values:

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: `8000`) |
| `JWT_SECRET` | Secret key for JWT tokens |
| `MONGODB_URI` | MongoDB connection string |
| `CLOUDINARY_*` | Cloudinary credentials |

Start the server:

```bash
npm run server
```

### 3. Frontend setup

Open a new terminal:

```bash
cd client
npm install
cp .env.example .env
```

Set `VITE_BACKEND_URL` in `client/.env` to your backend URL (e.g. `http://localhost:8000`).

Start the client:

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

---

## API Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Log in |
| GET | `/api/auth/check` | Verify auth (protected) |
| GET | `/api/messages/users` | Get users for sidebar |
| GET | `/api/messages/:id` | Get messages with a user |
| POST | `/api/messages/send/:id` | Send a message |
| GET | `/api/status` | Health check |

---

## Screenshots

_Add screenshots of your login page and chat UI here after deployment._

---

## Author

**Nikhil** — [GitHub](https://github.com/Nikhil-bth)

---

## License

This project is for educational and portfolio purposes.
