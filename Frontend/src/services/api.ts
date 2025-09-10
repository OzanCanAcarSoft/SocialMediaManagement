export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body?: string;
}

const BASE = 'http://localhost:4000/api';

async function handleRes<T>(res: Response): Promise<T> {
  if (!res.ok) throw new Error('Network error');
  return (await res.json()) as T;
}

export const fetchUsers = () => fetch(`${BASE}/users`).then(res => handleRes<User[]>(res));
export const fetchPosts = () => fetch(`${BASE}/posts`).then(res => handleRes<Post[]>(res));

export const createUser = (user: Partial<User>) =>
  fetch(`${BASE}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }).then(res => handleRes<User>(res));

export const updateUser = (id: number, user: Partial<User>) =>
  fetch(`${BASE}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }).then(res => handleRes<User>(res));

export const deleteUser = (id: number) =>
  fetch(`${BASE}/users/${id}`, { method: 'DELETE' }).then(res => {
    if (!res.ok) throw new Error('Delete failed');
    return true;
  });

export const createPost = (post: Partial<Post>) =>
  fetch(`${BASE}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  }).then(res => handleRes<Post>(res));

export const updatePost = (id: number, post: Partial<Post>) =>
  fetch(`${BASE}/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),
  }).then(res => handleRes<Post>(res));

export const deletePost = (id: number) =>
  fetch(`${BASE}/posts/${id}`, { method: 'DELETE' }).then(res => {
    if (!res.ok) throw new Error('Delete failed');
    return true;
  });

