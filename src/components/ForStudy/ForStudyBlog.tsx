import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './ForStudyBlog.module.css';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const ForStudyBlog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <>
      <h1>Our news</h1>
      <ol>
        {posts.map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </ol>
    </>
  );
};

export default ForStudyBlog;
