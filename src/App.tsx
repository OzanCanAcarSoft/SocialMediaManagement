import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Users from './pages/Users';
import Posts from './pages/Posts';
import './index.css';

const App: React.FC = () => (
  <div style={{ padding: 20, fontFamily: 'Inter, Arial, sans-serif' }}>
    <header style={{ marginBottom: 20 }}>
      <nav>
        <Link to="/">Home</Link> {' | '}
        <Link to="/users">Users</Link> {' | '}
        <Link to="/posts">Posts</Link>
      </nav>
    </header>

    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </main>
  </div>
);

export default App;