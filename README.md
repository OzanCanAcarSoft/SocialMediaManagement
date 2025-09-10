# My App

## Description
This project is a simple React + TypeScript frontend with a NestJS backend.  
It demonstrates CRUD operations on Users and Posts, with a user-friendly interface.  
Backend data is stored in memory (no database), and frontend communicates with the backend API.

## Requirements
- Node.js v16 or higher
- npm

## Project Structure
my-app/
├─ frontend/ # React + Vite frontend
├─ backend/ # NestJS backend

## !! FRONTEND SETUP !!

## VS Code Setup
Open my-app folder using VS Code.
Open a Terminal on VS Code.

## Navigate to the frontend folder:
Use command "cd frontend" on Terminal.

## Install Dependencies
Use command "npm install" on Terminal.

## Start the development server
Use Command "npm run dev" on Terminal.

## Open the app in your browser
The app must be started on your local server like http://localhost:5173 (Example)

## Features
Homepage with links to Users and Posts
List, Add, Edit, and Delete operations for Users and Posts
Fetches data from backend API
Basic user-friendly styling
TypeScript + ESLint compliant

## !! BACKEND SETUP !!

## VS Code
Open a new Terminal on VS Code
The Frontend must be running. So do not close the previous Terminal!

## Navigate to the Backend Folder
Use command "cd backend" on Terminal.

## Install Dependencies
Use command "npm install" on Terminal.

## Start Development Server
Use command "npm run start:dev" on Terminal.

## Backend will run on
http://localhost:4000 (Example)

## API Endpoints
Users:

-GET /api/users - List all users
-GET /api/users/:id - Get a user by ID
-POST /api/users - Create a new user
-PUT /api/users/:id - Update a user
-DELETE /api/users/:id - Delete a user

Posts:

-GET /api/posts - List all posts
-GET /api/posts/:id - Get a post by ID
-POST /api/posts - Create a new post
-PUT /api/posts/:id - Update a post
-DELETE /api/posts/:id - Delete a post

## How to Use:
Start backend: npm run start:dev in backend/ folder. Check "!! BACKEND SETUP !!" part above.
Start frontend: npm run dev in frontend/ folder. Check "!! FRONTEND SETUP !!" part above.
Open http://localhost:5173 (Example) in your browser and navigate through the app.
You can use the application from your Local Frontend server.