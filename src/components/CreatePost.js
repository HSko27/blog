import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ setPosts }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts(prevPosts => {
      const newPost = {
        id: prevPosts.length + 1, // Generování nového ID
        title,
        content,
        createdAt: new Date().toLocaleString(),
      };
      return [...prevPosts, newPost];
    });
    navigate('/'); // Přesměrování na hlavní stránku po vytvoření příspěvku
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content: </label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
