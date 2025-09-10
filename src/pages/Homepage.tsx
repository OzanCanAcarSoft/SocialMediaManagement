import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 30,
        padding: '15px 0',
        backgroundColor: '#f3f4f6',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#1f2937', fontWeight: 600 }}>Home</Link>
        <Link to="/users" style={{ textDecoration: 'none', color: '#1f2937', fontWeight: 600 }}>Users</Link>
        <Link to="/posts" style={{ textDecoration: 'none', color: '#1f2937', fontWeight: 600 }}>Posts</Link>
      </nav>

      {/* Ana içerik */}
      <div style={{
        maxWidth: 800,
        margin: '60px auto',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: 20 }}>Welcome to the Sample App</h1>
        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: 40 }}>
          Bu uygulamada Users ve Posts listelerini görebilir ve örnek CRUD işlemlerini deneyebilirsiniz.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
          <Link to="/users" style={{
            display: 'block',
            padding: '25px 50px',
            backgroundColor: '#4f46e5',
            color: 'white',
            textDecoration: 'none',
            borderRadius: 10,
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.2s'
          }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#3730a3')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#4f46e5')}
          >
            Users
          </Link>

          <Link to="/posts" style={{
            display: 'block',
            padding: '25px 50px',
            backgroundColor: '#10b981',
            color: 'white',
            textDecoration: 'none',
            borderRadius: 10,
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.2s'
          }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = '#047857')}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = '#10b981')}
          >
            Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
