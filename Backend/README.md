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

Navigate to the frontend folder:
```bash
cd frontend

## Install Dependencies
npm install

## Start the development server
npm run dev

## Open the app in your browser
http://localhost:5173 (Example)

##Features
Homepage with links to Users and Posts
List, Add, Edit, and Delete operations for Users and Posts
Fetches data from backend API
Basic user-friendly styling
TypeScript + ESLint compliant

## !! BACKEND SETUP !!

## Navigate to the Backend Folder
cd backend

## Install Dependencies
npm install

## Start Development Server
npm run start:dev

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
Start backend: npm run start:dev in backend/ folder
Start frontend: npm run dev in frontend/ folder
Open http://localhost:5173 in your browser and navigate through the app.
You can use the application from your Local Frontend server.