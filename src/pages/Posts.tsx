import React, { useEffect, useState } from 'react';
import { type Post, type User, fetchPosts, fetchUsers, createPost, updatePost, deletePost } from '../services/api';

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Post | null>(null);
  const [form, setForm] = useState<Partial<Post>>({ userId: 1, title: '' });

  useEffect(() => { load(); }, []);

  async function load() {
    setLoading(true);
    try {
      const [p, u] = await Promise.all([fetchPosts(), fetchUsers()]);
      setPosts(p);
      setUsers(u);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  }

  async function handleAdd() {
    const created = await createPost({ userId: form.userId, title: form.title });
    setPosts(prev => [...prev, created]);
    setForm({ userId: 1, title: '' });
  }

  async function handleUpdate() {
    if (!editing) return;
    const updated = await updatePost(editing.id, { userId: form.userId, title: form.title });
    setPosts(prev => prev.map(p => (p.id === updated.id ? updated : p)));
    setEditing(null);
    setForm({ userId: 1, title: '' });
  }

  async function handleDelete(id: number) {
    await deletePost(id);
    setPosts(prev => prev.filter(p => p.id !== id));
  }

  function startEdit(p: Post) {
    setEditing(p);
    setForm({ userId: p.userId, title: p.title });
  }

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', fontFamily: 'Inter, Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Posts</h2>

      {loading ? <p>Loading...</p> : (
        <>
          {/* Posts Table */}
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 30 }}>
            <thead>
              <tr style={{ backgroundColor: '#f3f4f6' }}>
                <th style={{ padding: 8, border: '1px solid #ddd' }}>User</th>
                <th style={{ padding: 8, border: '1px solid #ddd' }}>ID</th>
                <th style={{ padding: 8, border: '1px solid #ddd' }}>Title</th>
                <th style={{ padding: 8, border: '1px solid #ddd', width: 180 }}>Actions</th> {/* Genişlik eklendi */}
              </tr>
            </thead>
            <tbody>
              {posts.map(p => {
                const user = users.find(u => u.id === p.userId);
                return (
                  <tr key={p.id} style={{ backgroundColor: '#fff', transition: 'background 0.2s' }}
                    onMouseOver={e => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                    onMouseOut={e => (e.currentTarget.style.backgroundColor = '#fff')}>
                    <td style={{ padding: 8, border: '1px solid #ddd' }}>{user?.username ?? p.userId}</td>
                    <td style={{ padding: 8, border: '1px solid #ddd' }}>{p.id}</td>
                    <td style={{ padding: 8, border: '1px solid #ddd' }}>{p.title}</td>
                    <td style={{ padding: 8, border: '1px solid #ddd', display: 'flex', gap: 8 }}> {/* Flex eklendi */}
                      <button style={{
                        padding: '4px 8px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer'
                      }} onClick={() => startEdit(p)}>Edit</button>
                      <button style={{
                        padding: '4px 8px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer'
                      }} onClick={() => handleDelete(p.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </table>

          {/* Add / Edit Form */}
          <h3 style={{ marginBottom: 10 }}>{editing ? 'Edit Post' : 'Add Post'}</h3>
          <div style={{ display: 'grid', gap: 10, marginBottom: 10, gridTemplateColumns: '1fr 2fr' }}>
            <select value={form.userId} onChange={e => setForm({ ...form, userId: Number(e.target.value) })} style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}>
              {users.map(u => <option key={u.id} value={u.id}>{u.username}</option>)}
            </select>
            <input placeholder="Title" value={form.title ?? ''} onChange={e => setForm({ ...form, title: e.target.value })} style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
          </div>
          <div>
            {editing ? (
              <>
                <button style={{ padding: '6px 12px', marginRight: 5, backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }} onClick={handleUpdate}>Save</button>
                <button style={{ padding: '6px 12px', backgroundColor: '#9ca3af', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }} onClick={() => { setEditing(null); setForm({ userId: 1, title: '' }); }}>Cancel</button>
              </>
            ) : (
              <button style={{ padding: '6px 12px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }} onClick={handleAdd}>Add</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
