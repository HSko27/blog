import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is the first post', createdAt: '2023-06-10' },
    { id: 2, title: 'Second Post', content: 'This is the second post', createdAt: '2023-06-11' },
    // Přidejte více příspěvků pro testování
  ]);

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BlogList posts={posts} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:id" element={<BlogPost posts={posts} setPosts={setPosts} />} />
          <Route path="/post/:id/edit" element={<EditPost posts={posts} setPosts={setPosts} />} />
          <Route path="/create" element={<CreatePost setPosts={setPosts} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
