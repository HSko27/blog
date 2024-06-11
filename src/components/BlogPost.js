import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const BlogPost = ({ posts, setPosts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  console.log("Received ID:", id); // Ladicí výpis
  console.log("Posts:", posts); // Ladicí výpis

  const post = posts.find(post => post.id === parseInt(id));
  console.log("Found Post:", post); // Ladicí výpis

  if (!post) {
    return <div>Post not found</div>;
  }

  const handleDelete = () => {
    const updatedPosts = posts.filter(post => post.id !== parseInt(id));
    setPosts(updatedPosts);
    navigate('/'); // Přesměrujeme uživatele zpět na hlavní stránku
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Created at: {post.createdAt}</p>
      {user && (
        <div>
          <button onClick={() => navigate(`/post/${id}/edit`)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
