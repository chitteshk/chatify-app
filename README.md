# Chatify App

A full-stack chat application with a React + Vite frontend and an Express + MongoDB backend.

## Prerequisites
- Node.js >= 20.0.0
- npm

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/chitteshk/chatify-app.git
   cd chatify-app
   ```

2. Install dependencies for both frontend and backend:
   ```sh
   npm install --prefix frontend
   npm install --prefix backend
   ```

## Running the Application

### Development Mode

- **Backend** (with auto-reload):
  ```sh
  cd backend
  npm run dev
  ```
- **Frontend** (Vite dev server):
  ```sh
  cd frontend
  npm run dev
  ```

### Production Mode

- **Build frontend**:
  ```sh
  cd frontend
  npm run build
  ```
- **Start backend** (serves API):
  ```sh
  cd backend
  npm start
  ```
- Optionally, use the root scripts:
  ```sh
  npm run build   # Installs dependencies and builds frontend
  npm start       # Starts backend
  ```

## Project Structure
- `frontend/` — React + Vite client
- `backend/` — Express server and API

## Environment Variables

The backend requires a `.env` file in the `backend/` directory with the following variables:

```env
PORT=3000                        # Port for the backend server
MONGO_URI=your_mongodb_uri       # MongoDB connection string (see Atlas dashboard)
NODE_ENV=development             # Set to 'development' or 'production'
JWT_SECRET=your_jwt_secret       # Secret key for JWT signing
```

You can use `backend/.env.example` as a template if available.

## License
MIT
