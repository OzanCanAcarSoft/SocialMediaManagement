# React + Vite Sample Project

# Project Description

- First, the project was created using Vite with the command:  
  `npm create vite@latest my-app -- --template react-ts`
- Inside the `src` folder, `pages`, `components`, and `services` directories were added for pages, components, and API operations.
- React Router was installed with the command:  
  `npm install react-router-dom`
- Routes for pages such as Homepage, Users, and Posts were added inside `src/App.tsx`.
- A simple Homepage page was created inside the `src/pages` folder.
- A `Users.tsx` page was created inside the `src/pages` folder.
- A `Posts.tsx` page was created inside the `src/pages` folder.
- For potential API requests, an `api.ts` file was created inside `src/services`, where a CRUD skeleton was prepared.  
  Functions `fetchUsers` and `fetchPosts` were implemented to fetch Users and Posts data simultaneously from JsonPlaceholder.

This project was developed using **React**, **TypeScript**, and **Vite**.  
Example data is fetched from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), and CRUD (Create, Read, Update, Delete) operations can be performed on **Users** and **Posts** lists.

---

## Features
- React + TypeScript + Vite setup
- Page navigation with React Router
- Pages:
  - Homepage (links to Users and Posts)
  - Users (list, add, edit, delete)
  - Posts (list, add, edit, delete, show relation with Users)
- Fetching data from JSONPlaceholder API
- Basic UI/UX adjustments (tables, forms, buttons)
- Code quality control with ESLint

---

## Requirements
- [Node.js](https://nodejs.org/) **v18+** (tested on v22)
- npm (comes with Node.js)

---

## Installation
Clone the project and install dependencies:

```bash
# Clone the repository
git clone https://github.com/your-username/my-app.git

# Enter the project directory
cd my-app

# Install dependencies
npm install
