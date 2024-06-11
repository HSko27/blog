import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 100)}...</p>
          <Link to={`/post/${post.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
