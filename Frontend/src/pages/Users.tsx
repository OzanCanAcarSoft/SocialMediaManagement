import React, { useEffect, useState } from 'react';
import { type User, fetchUsers, createUser, updateUser, deleteUser } from '../services/api';

const emptyUser: User = { id: 0, name: '', username: '', email: '' };

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<User | null>(null);
  const [form, setForm] = useState<User>(emptyUser);

  useEffect(() => { load(); }, []);

  async function load() {
    setLoading(true);
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  }

  async function handleAdd() {
    const created = await createUser({ name: form.name, username: form.username, email: form.email });
    setUsers(prev => [...prev, created]);
    setForm(emptyUser);
  }

  async function handleUpdate() {
    if (!editing) return;
    const updated = await updateUser(editing.id, { name: form.name, username: form.username, email: form.email });
    setUsers(prev => prev.map(u => (u.id === updated.id ? updated : u)));
    setEditing(null);
    setForm(emptyUser);
  }

  async function handleDelete(id: number) {
    await deleteUser(id);
    setUsers(prev => prev.filter(u => u.id !== id));
  }

  function startEdit(u: User) {
    setEditing(u);
    setForm({ ...u });
  }

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', fontFamily: 'Inter, Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Users</h2>

      {loading ? <p>Loading...</p> : (
        <>
          {/* Users Table */}
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 30 }}>
            <thead>
              <tr style={{ backgroundColor: '#f3f4f6' }}>
                <th style={{ padding: 8, border: '1px solid #ddd' }}>ID</th>
                <th style={{ padding: 8, border: '1px solid #ddd' }}>Name</th>
                <th style={{ padding: 8, border: '1px solid #ddd' }}>Username</th>
                <th style={{ padding: 8, border: '1px solid #ddd' }}>Email</th>
                <th style={{ padding: 8, border: '1px solid #ddd' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} style={{ backgroundColor: '#fff', transition: 'background 0.2s' }}
                    onMouseOver={e => (e.currentTarget.style.backgroundColor = '#f9fafb')}
                    onMouseOut={e => (e.currentTarget.style.backgroundColor = '#fff')}>
                  <td style={{ padding: 8, border: '1px solid #ddd' }}>{u.id}</td>
                  <td style={{ padding: 8, border: '1px solid #ddd' }}>{u.name}</td>
                  <td style={{ padding: 8, border: '1px solid #ddd' }}>{u.username}</td>
                  <td style={{ padding: 8, border: '1px solid #ddd' }}>{u.email}</td>
                  <td style={{ padding: 8, border: '1px solid #ddd' }}>
                    <button style={{
                      marginRight: 5, padding: '4px 8px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer'
                    }} onClick={() => startEdit(u)}>Edit</button>
                    <button style={{
                      padding: '4px 8px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer'
                    }} onClick={() => handleDelete(u.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add / Edit Form */}
          <h3 style={{ marginBottom: 10 }}>{editing ? 'Edit User' : 'Add User'}</h3>
          <div style={{ display: 'grid', gap: 10, marginBottom: 10 }}>
            <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
            <input placeholder="Username" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
            <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
          </div>
          <div>
            {editing ? (
              <>
                <button style={{ padding: '6px 12px', marginRight: 5, backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }} onClick={handleUpdate}>Save</button>
                <button style={{ padding: '6px 12px', backgroundColor: '#9ca3af', color: 'white', border: 'none', borderRadius: 4, cursor: 'pointer' }} onClick={() => { setEditing(null); setForm(emptyUser); }}>Cancel</button>
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
