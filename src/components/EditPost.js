import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Použijeme useNavigate místo useHistory
import { AuthContext } from '../contexts/AuthContext';

const EditPost = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // Použijeme useNavigate
  const { user } = useContext(AuthContext);

  const post = posts.find(post => post.id === parseInt(id));

  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');

  useEffect(() => {
    if (!post) {
      navigate('/'); // Přesměrujeme uživatele, pokud příspěvek není nalezen
    }
  }, [post, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPosts = posts.map(post => {
      if (post.id === parseInt(id)) {
        return {
          ...post,
          title,
          content,
          updatedAt: new Date().toLocaleString()
        };
      }
      return post;
    });
    setPosts(updatedPosts);
    navigate(`/post/${id}`); // Přesměrujeme po úpravě
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content: </label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditPost;
